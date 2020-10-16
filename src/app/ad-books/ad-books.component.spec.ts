import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBooksComponent } from './ad-books.component';

describe('AdBooksComponent', () => {
  let component: AdBooksComponent;
  let fixture: ComponentFixture<AdBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
