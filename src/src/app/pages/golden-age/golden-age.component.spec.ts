import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenAgeComponent } from './golden-age.component';

describe('GoldenAgeComponent', () => {
  let component: GoldenAgeComponent;
  let fixture: ComponentFixture<GoldenAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldenAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
