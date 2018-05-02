import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionPersistSelectionComponent } from './selection-persist-selection.component';

describe('SelectionPersistSelectionComponent', () => {
  let component: SelectionPersistSelectionComponent;
  let fixture: ComponentFixture<SelectionPersistSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionPersistSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionPersistSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
