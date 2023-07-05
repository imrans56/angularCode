import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRmcommentsComponent } from './details-rmcomments.component';

describe('DetailsRmcommentsComponent', () => {
  let component: DetailsRmcommentsComponent;
  let fixture: ComponentFixture<DetailsRmcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRmcommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRmcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
