import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditHrCommentsComponent } from './edit-hr-comments.component';

describe('EditHrCommentsComponent', () => {
  let component: EditHrCommentsComponent;
  let fixture: ComponentFixture<EditHrCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHrCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHrCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
