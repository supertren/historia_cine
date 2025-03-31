import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService, ContentSection } from '../../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent implements OnInit {
  sections: ContentSection[] = [];
  menuActive = false;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.sections = this.contentService.getAllSections();
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }
}
