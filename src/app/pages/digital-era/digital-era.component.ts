import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ContentSection } from '../../services/content.service';

@Component({
  selector: 'app-digital-era',
  templateUrl: './digital-era.component.html',
  styleUrls: ['./digital-era.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DigitalEraComponent implements OnInit {
  content?: ContentSection;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.getContent('digitalEra');
  }
}
