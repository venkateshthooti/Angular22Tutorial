import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgContent } from './parent-ng-content';

describe('ParentNgContent', () => {
  let component: ParentNgContent;
  let fixture: ComponentFixture<ParentNgContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentNgContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentNgContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
