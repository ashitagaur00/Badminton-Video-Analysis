import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAnalysisComponent } from './video-analysis.component';

describe('VideoAnalysisComponent', () => {
  let component: VideoAnalysisComponent;
  let fixture: ComponentFixture<VideoAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
