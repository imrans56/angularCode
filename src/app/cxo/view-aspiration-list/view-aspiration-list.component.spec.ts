import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAspirationListComponent } from './view-aspiration-list.component';

describe('ViewAspirationListComponent', () => {
  let component: ViewAspirationListComponent;
  let fixture: ComponentFixture<ViewAspirationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAspirationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAspirationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
