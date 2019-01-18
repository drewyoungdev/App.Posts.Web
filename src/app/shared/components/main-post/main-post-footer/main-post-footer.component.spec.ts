import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostFooterComponent } from './main-post-footer.component';

describe('MainPostFooterComponent', () => {
  let component: MainPostFooterComponent;
  let fixture: ComponentFixture<MainPostFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPostFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPostFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
