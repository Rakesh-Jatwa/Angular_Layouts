import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydriveComponent } from './mydrive.component';

describe('MydriveComponent', () => {
  let component: MydriveComponent;
  let fixture: ComponentFixture<MydriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
