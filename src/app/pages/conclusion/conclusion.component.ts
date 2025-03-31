import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ContentSection } from '../../services/content.service';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ConclusionComponent implements OnInit {
  content?: ContentSection;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.getContent('conclusion');
  }
}
