import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemoComponentComponent } from './form-demo-component.component';

describe('FormDemoComponentComponent', () => {
  let component: FormDemoComponentComponent;
  let fixture: ComponentFixture<FormDemoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDemoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
