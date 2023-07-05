import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAspirationComponent } from './edit-aspiration.component';

describe('EditAspirationComponent', () => {
  let component: EditAspirationComponent;
  let fixture: ComponentFixture<EditAspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAspirationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
