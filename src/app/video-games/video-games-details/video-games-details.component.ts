import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { VideoGame } from '../video-games.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-games-details',
  templateUrl: './video-games-details.component.html',
  styleUrls: ['./video-games-details.component.css']
})
export class VideoGamesDetailsComponent implements OnInit, OnChanges {
  @Input() videoGameDetails: VideoGame;
  sanitizedUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoGameDetails.trailerPath);
  }

}
