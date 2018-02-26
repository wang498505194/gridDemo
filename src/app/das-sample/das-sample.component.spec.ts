import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasSampleComponent } from './das-sample.component';

describe('DasSampleComponent', () => {
  let component: DasSampleComponent;
  let fixture: ComponentFixture<DasSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
