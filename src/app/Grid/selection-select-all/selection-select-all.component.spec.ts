import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSelectAllComponent } from './selection-select-all.component';

describe('SelectionSelectAllComponent', () => {
  let component: SelectionSelectAllComponent;
  let fixture: ComponentFixture<SelectionSelectAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionSelectAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionSelectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
