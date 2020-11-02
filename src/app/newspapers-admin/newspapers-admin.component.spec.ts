import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspapersAdminComponent } from './newspapers-admin.component';

describe('NewspapersAdminComponent', () => {
  let component: NewspapersAdminComponent;
  let fixture: ComponentFixture<NewspapersAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspapersAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspapersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
