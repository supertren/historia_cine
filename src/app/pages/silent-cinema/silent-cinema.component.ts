import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ContentSection } from '../../services/content.service';

@Component({
  selector: 'app-silent-cinema',
  templateUrl: './silent-cinema.component.html',
  styleUrls: ['./silent-cinema.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SilentCinemaComponent implements OnInit {
  content?: ContentSection;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.content = this.contentService.getContent('silentCinema');
  }
}
