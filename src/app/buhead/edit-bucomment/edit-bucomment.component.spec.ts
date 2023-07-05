import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBucommentComponent } from './edit-bucomment.component';

describe('EditBucommentComponent', () => {
  let component: EditBucommentComponent;
  let fixture: ComponentFixture<EditBucommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBucommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBucommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
