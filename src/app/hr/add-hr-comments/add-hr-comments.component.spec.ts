import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHrCommentsComponent } from './add-hr-comments.component';

describe('AddHrCommentsComponent', () => {
  let component: AddHrCommentsComponent;
  let fixture: ComponentFixture<AddHrCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHrCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHrCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
