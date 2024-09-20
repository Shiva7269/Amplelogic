import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasPopupComponent } from './offcanvas-popup.component';

describe('OffcanvasPopupComponent', () => {
  let component: OffcanvasPopupComponent;
  let fixture: ComponentFixture<OffcanvasPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffcanvasPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffcanvasPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
