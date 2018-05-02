import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdialogDemoComponent } from './dialogdialog-demo.component';

describe('DialogdialogDemoComponent', () => {
  let component: DialogdialogDemoComponent;
  let fixture: ComponentFixture<DialogdialogDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdialogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
