import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIssuedbooksComponent } from './admin-issuedbooks.component';

describe('AdminIssuedbooksComponent', () => {
  let component: AdminIssuedbooksComponent;
  let fixture: ComponentFixture<AdminIssuedbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIssuedbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIssuedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
