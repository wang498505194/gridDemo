import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionStoreByCustomKeyComponent } from './selection-store-by-custom-key.component';

describe('SelectionStoreByCustomKeyComponent', () => {
  let component: SelectionStoreByCustomKeyComponent;
  let fixture: ComponentFixture<SelectionStoreByCustomKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionStoreByCustomKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionStoreByCustomKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
