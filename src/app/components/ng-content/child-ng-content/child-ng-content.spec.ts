import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgContent } from './child-ng-content';

describe('ChildNgContent', () => {
  let component: ChildNgContent;
  let fixture: ComponentFixture<ChildNgContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildNgContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildNgContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
