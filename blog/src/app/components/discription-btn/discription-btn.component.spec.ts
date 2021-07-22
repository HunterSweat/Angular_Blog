import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscriptionBtnComponent } from './discription-btn.component';

describe('DiscriptionBtnComponent', () => {
  let component: DiscriptionBtnComponent;
  let fixture: ComponentFixture<DiscriptionBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscriptionBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscriptionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
