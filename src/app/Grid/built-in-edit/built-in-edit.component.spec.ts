import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInEditComponent } from './built-in-edit.component';

describe('BuiltInEditComponent', () => {
  let component: BuiltInEditComponent;
  let fixture: ComponentFixture<BuiltInEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
