import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempContainer } from './ng-temp-container';

describe('NgTempContainer', () => {
  let component: NgTempContainer;
  let fixture: ComponentFixture<NgTempContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTempContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(NgTempContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
