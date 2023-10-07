import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLCompComponent } from './ml-comp.component';

describe('MLCompComponent', () => {
  let component: MLCompComponent;
  let fixture: ComponentFixture<MLCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MLCompComponent]
    });
    fixture = TestBed.createComponent(MLCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
