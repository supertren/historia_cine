import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalEraComponent } from './digital-era.component';

describe('DigitalEraComponent', () => {
  let component: DigitalEraComponent;
  let fixture: ComponentFixture<DigitalEraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalEraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalEraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
