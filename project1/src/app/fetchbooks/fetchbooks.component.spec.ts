import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchbooksComponent } from './fetchbooks.component';

describe('FetchbooksComponent', () => {
  let component: FetchbooksComponent;
  let fixture: ComponentFixture<FetchbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
