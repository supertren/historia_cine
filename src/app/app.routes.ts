import { Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { OriginsComponent } from './pages/origins/origins.component';
import { SilentCinemaComponent } from './pages/silent-cinema/silent-cinema.component';
import { GoldenAgeComponent } from './pages/golden-age/golden-age.component';
import { ModernEraComponent } from './pages/modern-era/modern-era.component';
import { DigitalEraComponent } from './pages/digital-era/digital-era.component';
import { ConclusionComponent } from './pages/conclusion/conclusion.component';

export const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'origins', component: OriginsComponent },
  { path: 'silent-cinema', component: SilentCinemaComponent },
  { path: 'golden-age', component: GoldenAgeComponent },
  { path: 'modern-era', component: ModernEraComponent },
  { path: 'digital-era', component: DigitalEraComponent },
  { path: 'conclusion', component: ConclusionComponent },
  { path: '**', redirectTo: '/introduction' }
];
