import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWithRepliesComponent } from './post-with-replies.component';

describe('PostWithRepliesComponent', () => {
  let component: PostWithRepliesComponent;
  let fixture: ComponentFixture<PostWithRepliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostWithRepliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostWithRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
