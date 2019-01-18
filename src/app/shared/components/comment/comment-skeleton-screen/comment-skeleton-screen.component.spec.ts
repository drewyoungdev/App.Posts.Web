import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSkeletonScreenComponent } from './comment-skeleton-screen.component';

describe('CommentSkeletonScreenComponent', () => {
  let component: CommentSkeletonScreenComponent;
  let fixture: ComponentFixture<CommentSkeletonScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSkeletonScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSkeletonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
