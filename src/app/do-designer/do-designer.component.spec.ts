import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoDesignerComponent } from './do-designer.component';

describe('DoDesignerComponent', () => {
  let component: DoDesignerComponent;
  let fixture: ComponentFixture<DoDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
