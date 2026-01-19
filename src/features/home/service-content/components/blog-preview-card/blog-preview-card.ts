import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPreviewService, type Article } from '../../services/blog-preview.service';

@Component({
  selector: 'app-blog-preview-card',
  imports: [RouterLink],
  templateUrl: './blog-preview-card.html',
  styleUrl: './blog-preview-card.scss'
})
export class BlogPreviewCard implements OnInit {

  private readonly blogPreviewService = inject(BlogPreviewService);

  latestArticles = signal<Article[]>([]);

  ngOnInit(): void {
    this.latestArticles.set(this.blogPreviewService.getLatestArticles());
  }
}