import { Injectable, signal } from '@angular/core';

interface StoryToken {
  content: string;
  type: 'keyword-export' | 'keyword-const' | 'text' | 'brace';
}

interface StoryLine {
  tokens: StoryToken[];
}

@Injectable({
  providedIn: 'root'
})
export class StoryBoxService {

  //======= SIGNALS =======

  lines = signal<StoryLine[]>([]);
  currentIndex = signal(0);
  isAnimating = signal(false);
  scrollCallback: (() => void) | null = null;

  //======= DATA =======

  private readonly storyData = [
    'export const { GENESE } = "1969: ARPANET..."',
    'const PREMIER_MOT = "Le premier mot..."',
    'const MAGICIEN_WEB = "Tim Berners-Lee..."',
    'export const { GENESE } = "1969: ARPANET..."',
    'const PREMIER_MOT = "Le premier mot..."',
    'const MAGICIEN_WEB = "Tim Berners-Lee..."',
  ];

  //======= CONFIG =======

  private readonly delay = 2000;
  private animationTimeout: ReturnType<typeof setTimeout> | null = null;

  //======= METHODS =======

  startAnimation(): void {
    this.isAnimating.set(true);
    this.currentIndex.set(0);
    this.lines.set([]);
    this.addNextLine();
  }

  destroy(): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
      this.animationTimeout = null;
    }
    this.isAnimating.set(false);
  }

  //======= PRIVATE =======

  private addNextLine(): void {
    const index = this.currentIndex();
    
    if (index >= this.storyData.length) {
      this.isAnimating.set(false);
      return;
    }

    const parsedLine = this.parseLine(this.storyData[index]);
    this.lines.update(current => [...current, { tokens: parsedLine }]);
    this.currentIndex.update(i => i + 1);

    if (this.scrollCallback) {
      this.scrollCallback();
    }

    this.animationTimeout = setTimeout(() => this.addNextLine(), this.delay);
  }

  private parseLine(line: string): StoryToken[] {
    const tokens: StoryToken[] = [];
    let remaining = line;

    const patterns = [
      { regex: /^export/, type: 'keyword-export' as const },
      { regex: /^const/, type: 'keyword-const' as const },
      { regex: /^[{}]/, type: 'brace' as const }
    ];

    while (remaining.length > 0) {
      let matched = false;

      for (const { regex, type } of patterns) {
        const match = remaining.match(regex);
        if (match) {
          tokens.push({ content: match[0], type });
          remaining = remaining.slice(match[0].length);
          matched = true;
          break;
        }
      }

      if (!matched) {
        const nextSpecial = remaining.search(/export|const|[{}]/);
        const chunk = nextSpecial === -1 ? remaining : remaining.slice(0, nextSpecial);
        if (chunk) {
          tokens.push({ content: chunk, type: 'text' });
          remaining = remaining.slice(chunk.length);
        }
      }
    }

    return tokens;
  }
}