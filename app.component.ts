// app.component.ts
import { Component } from '@angular/core';
import { MarkdownService } from './markdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  markdownText: string = '';

  constructor(private markdownService: MarkdownService) {}

  get previewHtml(): string {
    return this.markdownService.convertToHtml(this.markdownText);
  }
}
