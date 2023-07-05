import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuheadComponent } from './buhead.component';

describe('BuheadComponent', () => {
  let component: BuheadComponent;
  let fixture: ComponentFixture<BuheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
