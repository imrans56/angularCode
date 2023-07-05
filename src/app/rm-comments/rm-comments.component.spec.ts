import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmCommentsComponent } from './rm-comments.component';

describe('RmCommentsComponent', () => {
  let component: RmCommentsComponent;
  let fixture: ComponentFixture<RmCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
