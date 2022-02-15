import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoprComponent } from './hijopr.component';

describe('HijoprComponent', () => {
  let component: HijoprComponent;
  let fixture: ComponentFixture<HijoprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoprComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
