import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuAspirationListComponent } from './bu-aspiration-list.component';

describe('BuAspirationListComponent', () => {
  let component: BuAspirationListComponent;
  let fixture: ComponentFixture<BuAspirationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuAspirationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuAspirationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
