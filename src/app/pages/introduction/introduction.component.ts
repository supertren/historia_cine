import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ContentSection } from '../../services/content.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class IntroductionComponent implements OnInit {
  content?: ContentSection;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.getContent('introduction');
  }
}
