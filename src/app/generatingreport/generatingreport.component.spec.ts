import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingreportComponent } from './generatingreport.component';

describe('GeneratingreportComponent', () => {
  let component: GeneratingreportComponent;
  let fixture: ComponentFixture<GeneratingreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratingreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
