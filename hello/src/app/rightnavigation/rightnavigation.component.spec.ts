import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightnavigationComponent } from './rightnavigation.component';

describe('RightnavigationComponent', () => {
  let component: RightnavigationComponent;
  let fixture: ComponentFixture<RightnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
