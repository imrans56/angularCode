import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBucommentListComponent } from './view-bucomment-list.component';

describe('ViewBucommentListComponent', () => {
  let component: ViewBucommentListComponent;
  let fixture: ComponentFixture<ViewBucommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBucommentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBucommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
