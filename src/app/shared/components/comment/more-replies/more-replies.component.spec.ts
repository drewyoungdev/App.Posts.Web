import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRepliesComponent } from './more-replies.component';

describe('MoreRepliesComponent', () => {
  let component: MoreRepliesComponent;
  let fixture: ComponentFixture<MoreRepliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreRepliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
