import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CxoCommentListComponent } from './cxo-comment-list.component';

describe('CxoCommentListComponent', () => {
  let component: CxoCommentListComponent;
  let fixture: ComponentFixture<CxoCommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CxoCommentListComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CxoCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
