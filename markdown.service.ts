// markdown.service.ts
import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  convertToHtml(markdown: string): string {
    return marked(markdown);
  }
}
