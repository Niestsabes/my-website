import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactPanelComponent } from './contact-panel.component';

describe('ContactPanelComponent', () => {
  let component: ContactPanelComponent;
  let fixture: ComponentFixture<ContactPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
