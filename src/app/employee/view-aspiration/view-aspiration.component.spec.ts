import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAspirationComponent } from './view-aspiration.component';

describe('ViewAspirationComponent', () => {
  let component: ViewAspirationComponent;
  let fixture: ComponentFixture<ViewAspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAspirationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
