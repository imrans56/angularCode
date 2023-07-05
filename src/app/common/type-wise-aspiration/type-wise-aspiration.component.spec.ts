import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWiseAspirationComponent } from './type-wise-aspiration.component';

describe('TypeWiseAspirationComponent', () => {
  let component: TypeWiseAspirationComponent;
  let fixture: ComponentFixture<TypeWiseAspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeWiseAspirationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeWiseAspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
