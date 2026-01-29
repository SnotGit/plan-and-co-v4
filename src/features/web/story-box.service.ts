import { Injectable, signal } from '@angular/core';

interface StoryToken {
  content: string;
  type: 'keyword-export' | 'keyword-const' | 'keyword-function' | 'keyword-return' | 'function-name' | 'constant-name' | 'property' | 'string' | 'brace' | 'operator' | 'text';
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

  //======= DATA =======

  private readonly storyData = [
    'export const L\'HISTOIRE DU WEB = "L\'Odyssée Numérique"',
    '',
    'function chapitre1() {',
    '  const = L\'ÉTINCELLE',
    '  titre = "Au commencement : Le Rêve"',
    '  histoire = "Imaginez un monde où les ordinateurs étaient des îles solitaires. Dans les années 60, des rêveurs ont eu une idée folle : et si ces machines pouvaient se parler ? Pas pour la guerre, mais pour partager le savoir. C\'était le début d\'un langage commun, un babil électronique qui allait devenir le grand chœur de l\'humanité."',
    '  return "Le début du grand chœur de l\'humanité"',
    '}',
    '',
    'function premier_mot() {',
    '  moment = "29 octobre 1969, 22h30"',
    '  anecdote = "Charley Kline tente d\'écrire LOGIN entre deux universités. Le système plante après deux lettres : L... O... LO ! Comme Lo and behold (Regardez !). Un bug divin pour commencer l\'histoire."',
    '  return "LO ! Un bug divin pour commencer"',
    '}',
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
    
    this.lines.update(current => {
      const newLines = [...current, { tokens: parsedLine }];
      return newLines.length > 3 ? newLines.slice(-3) : newLines;
    });
    
    this.currentIndex.update(i => i + 1);

    this.animationTimeout = setTimeout(() => this.addNextLine(), this.delay);
  }

  private parseLine(line: string): StoryToken[] {
    if (line.trim() === '') {
      return [{ content: '', type: 'text' }];
    }

    const tokens: StoryToken[] = [];
    let i = 0;
    let expectingFunctionName = false;
    let expectingConstantName = false;

    while (i < line.length) {
      const remaining = line.slice(i);

      if (remaining[0] === ' ') {
        tokens.push({ content: ' ', type: 'text' });
        i++;
        continue;
      }

      if (remaining.startsWith('export')) {
        tokens.push({ content: 'export', type: 'keyword-export' });
        i += 6;
        continue;
      }

      if (remaining.startsWith('const')) {
        tokens.push({ content: 'const', type: 'keyword-const' });
        expectingConstantName = true;
        i += 5;
        continue;
      }

      if (remaining.startsWith('function')) {
        tokens.push({ content: 'function', type: 'keyword-function' });
        expectingFunctionName = true;
        i += 8;
        continue;
      }

      if (remaining.startsWith('return')) {
        tokens.push({ content: 'return', type: 'keyword-return' });
        i += 6;
        continue;
      }

      if (remaining[0] === '"') {
        let j = 1;
        let stringContent = '"';
        while (j < remaining.length && remaining[j] !== '"') {
          if (remaining[j] === '\\' && j + 1 < remaining.length) {
            stringContent += remaining[j] + remaining[j + 1];
            j += 2;
          } else {
            stringContent += remaining[j];
            j++;
          }
        }
        if (j < remaining.length) {
          stringContent += '"';
          j++;
        }
        tokens.push({ content: stringContent, type: 'string' });
        i += j;
        continue;
      }

      if (/^[{}()]/.test(remaining[0])) {
        tokens.push({ content: remaining[0], type: 'brace' });
        i++;
        continue;
      }

      if (remaining[0] === '=') {
        tokens.push({ content: '=', type: 'operator' });
        expectingConstantName = false;
        i++;
        continue;
      }

      const identMatch = remaining.match(/^[A-ZÀ-ÿa-z_][A-ZÀ-ÿa-z0-9_']*/);
      if (identMatch) {
        const ident = identMatch[0];
        let type: StoryToken['type'] = 'text';

        if (expectingFunctionName) {
          type = 'function-name';
          expectingFunctionName = false;
        } else if (expectingConstantName) {
          type = 'constant-name';
        } else {
          type = 'property';
        }

        tokens.push({ content: ident, type });
        i += ident.length;
        continue;
      }

      tokens.push({ content: remaining[0], type: 'text' });
      i++;
    }

    return tokens;
  }
}