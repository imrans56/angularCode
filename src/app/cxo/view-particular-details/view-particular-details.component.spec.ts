import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewParticularDetailsComponent } from './view-particular-details.component';

describe('ViewParticularDetailsComponent', () => {
  let component: ViewParticularDetailsComponent;
  let fixture: ComponentFixture<ViewParticularDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParticularDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewParticularDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
