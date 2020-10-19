import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnewspapersComponent } from './adnewspapers.component';

describe('AdnewspapersComponent', () => {
  let component: AdnewspapersComponent;
  let fixture: ComponentFixture<AdnewspapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdnewspapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdnewspapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
