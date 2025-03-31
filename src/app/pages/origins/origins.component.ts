import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ContentSection } from '../../services/content.service';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrls: ['./origins.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class OriginsComponent implements OnInit {
  content?: ContentSection;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.getContent('origins');
  }
}
