import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentCinemaComponent } from './silent-cinema.component';

describe('SilentCinemaComponent', () => {
  let component: SilentCinemaComponent;
  let fixture: ComponentFixture<SilentCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilentCinemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilentCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
