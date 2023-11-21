import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleBannerComponent } from './subtitle-banner.component';

describe('SubtitleBannerComponent', () => {
  let component: SubtitleBannerComponent;
  let fixture: ComponentFixture<SubtitleBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitleBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
