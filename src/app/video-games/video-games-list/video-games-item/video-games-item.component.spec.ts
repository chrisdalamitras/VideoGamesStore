import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGamesItemComponent } from './video-games-item.component';

describe('VideoGamesItemComponent', () => {
  let component: VideoGamesItemComponent;
  let fixture: ComponentFixture<VideoGamesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoGamesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGamesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
