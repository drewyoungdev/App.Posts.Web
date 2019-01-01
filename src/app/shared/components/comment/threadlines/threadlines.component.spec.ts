import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadlinesComponent } from './threadlines.component';

describe('ThreadlinesComponent', () => {
  let component: ThreadlinesComponent;
  let fixture: ComponentFixture<ThreadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
