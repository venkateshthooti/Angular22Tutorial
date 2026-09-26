import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCrudGETPUTPostDelete } from './client-crud-get-put-post-delete';

describe('ClientCrudGETPUTPostDelete', () => {
  let component: ClientCrudGETPUTPostDelete;
  let fixture: ComponentFixture<ClientCrudGETPUTPostDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCrudGETPUTPostDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientCrudGETPUTPostDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
