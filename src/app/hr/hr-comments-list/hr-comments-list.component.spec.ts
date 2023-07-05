import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCommentsListComponent } from './hr-comments-list.component';

describe('HrCommentsListComponent', () => {
  let component: HrCommentsListComponent;
  let fixture: ComponentFixture<HrCommentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrCommentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
