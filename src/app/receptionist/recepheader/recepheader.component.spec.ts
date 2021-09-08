import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepheaderComponent } from './recepheader.component';

describe('RecepheaderComponent', () => {
  let component: RecepheaderComponent;
  let fixture: ComponentFixture<RecepheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
