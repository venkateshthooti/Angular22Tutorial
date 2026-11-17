import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CopyPasteDirective } from './copy-paste-directive';

describe('CopyPasteDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatSnackBar, useValue: { open: () => undefined } },
      ],
    });
  });

  it('should create an instance', () => {
    const directive = TestBed.runInInjectionContext(
      () => new CopyPasteDirective(new ElementRef(document.createElement('p'))),
    );
    expect(directive).toBeTruthy();
  });
});
