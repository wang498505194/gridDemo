import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEditingInReactiveFormsComponent } from './custom-editing-in-reactive-forms.component';

describe('CustomEditingInReactiveFormsComponent', () => {
  let component: CustomEditingInReactiveFormsComponent;
  let fixture: ComponentFixture<CustomEditingInReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEditingInReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEditingInReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
