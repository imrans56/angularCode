import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBucommentComponent } from './add-bucomment.component';

describe('AddBucommentComponent', () => {
  let component: AddBucommentComponent;
  let fixture: ComponentFixture<AddBucommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBucommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBucommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
