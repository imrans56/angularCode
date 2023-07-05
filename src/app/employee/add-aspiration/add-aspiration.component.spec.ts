import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAspirationComponent } from './add-aspiration.component';

describe('AddAspirationComponent', () => {
  let component: AddAspirationComponent;
  let fixture: ComponentFixture<AddAspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAspirationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
