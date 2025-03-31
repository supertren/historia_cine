import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ContentSection } from '../../services/content.service';

@Component({
  selector: 'app-golden-age',
  templateUrl: './golden-age.component.html',
  styleUrls: ['./golden-age.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class GoldenAgeComponent implements OnInit {
  content?: ContentSection;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.getContent('goldenAge');
  }
}
