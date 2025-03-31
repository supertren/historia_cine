import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ContentSection } from '../../services/content.service';

@Component({
  selector: 'app-modern-era',
  templateUrl: './modern-era.component.html',
  styleUrls: ['./modern-era.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ModernEraComponent implements OnInit {
  content?: ContentSection;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.getContent('modernEra');
  }
}
