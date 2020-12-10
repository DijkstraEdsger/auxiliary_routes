import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSpinnerTwoComponent } from './load-spinner-two.component';

describe('LoadSpinnerTwoComponent', () => {
  let component: LoadSpinnerTwoComponent;
  let fixture: ComponentFixture<LoadSpinnerTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadSpinnerTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSpinnerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
