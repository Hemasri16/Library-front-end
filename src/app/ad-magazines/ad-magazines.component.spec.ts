import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMagazinesComponent } from './ad-magazines.component';

describe('AdMagazinesComponent', () => {
  let component: AdMagazinesComponent;
  let fixture: ComponentFixture<AdMagazinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMagazinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
