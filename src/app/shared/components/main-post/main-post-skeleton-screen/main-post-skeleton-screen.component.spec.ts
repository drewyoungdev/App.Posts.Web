import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostSkeletonScreenComponent } from './main-post-skeleton-screen.component';

describe('MainPostSkeletonScreenComponent', () => {
  let component: MainPostSkeletonScreenComponent;
  let fixture: ComponentFixture<MainPostSkeletonScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPostSkeletonScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPostSkeletonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
