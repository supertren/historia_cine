import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernEraComponent } from './modern-era.component';

describe('ModernEraComponent', () => {
  let component: ModernEraComponent;
  let fixture: ComponentFixture<ModernEraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModernEraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernEraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
