import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRmcommentsComponent } from './add-rmcomments.component';

describe('AddRmcommentsComponent', () => {
  let component: AddRmcommentsComponent;
  let fixture: ComponentFixture<AddRmcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRmcommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRmcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
