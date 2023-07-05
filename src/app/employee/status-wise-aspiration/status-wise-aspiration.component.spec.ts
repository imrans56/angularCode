import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWiseAspirationComponent } from './status-wise-aspiration.component';

describe('StatusWiseAspirationComponent', () => {
  let component: StatusWiseAspirationComponent;
  let fixture: ComponentFixture<StatusWiseAspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusWiseAspirationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusWiseAspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
