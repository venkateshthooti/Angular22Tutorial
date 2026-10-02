import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleEvents } from './life-cycle-events';

describe('LifeCycleEvents', () => {
  let component: LifeCycleEvents;
  let fixture: ComponentFixture<LifeCycleEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeCycleEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
