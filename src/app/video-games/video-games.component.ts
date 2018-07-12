import { Component, OnInit } from '@angular/core';
import { VideoGame } from './video-games.model';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css']
})
export class VideoGamesComponent implements OnInit {
  selectedVideoGame: VideoGame;

  constructor() { }

  ngOnInit() {
  }

}
