import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRmcommentsComponent } from './edit-rmcomments.component';

describe('EditRmcommentsComponent', () => {
  let component: EditRmcommentsComponent;
  let fixture: ComponentFixture<EditRmcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRmcommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRmcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
