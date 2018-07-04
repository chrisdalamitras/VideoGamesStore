import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGamesDetailsComponent } from './video-games-details.component';

describe('VideoGamesDetailsComponent', () => {
  let component: VideoGamesDetailsComponent;
  let fixture: ComponentFixture<VideoGamesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGamesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGamesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
