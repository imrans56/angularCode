import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirationDetailsComponent } from './aspiration-details.component';

describe('AspirationDetailsComponent', () => {
  let component: AspirationDetailsComponent;
  let fixture: ComponentFixture<AspirationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspirationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspirationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
