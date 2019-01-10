import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostHeaderComponent } from './main-post-header.component';

describe('MainPostHeaderComponent', () => {
  let component: MainPostHeaderComponent;
  let fixture: ComponentFixture<MainPostHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPostHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
