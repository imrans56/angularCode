import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirationFullfillmentComponent } from './aspiration-fullfillment.component';

describe('AspirationFullfillmentComponent', () => {
  let component: AspirationFullfillmentComponent;
  let fixture: ComponentFixture<AspirationFullfillmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspirationFullfillmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspirationFullfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
