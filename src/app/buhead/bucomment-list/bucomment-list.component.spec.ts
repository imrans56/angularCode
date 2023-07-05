import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucommentListComponent } from './bucomment-list.component';

describe('BucommentListComponent', () => {
  let component: BucommentListComponent;
  let fixture: ComponentFixture<BucommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucommentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
