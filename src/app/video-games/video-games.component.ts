import { Component, OnInit } from '@angular/core';
import { VideoGame } from './video-games.model';
import { VideoGamesService } from './video-games-list/video-games.service';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.css'],
  providers: [VideoGamesService]
})
export class VideoGamesComponent implements OnInit {
  selectedVideoGame: VideoGame;

  constructor(private videoGamesService: VideoGamesService) { }

  ngOnInit() {
    this.videoGamesService.videoGameSelected
      .subscribe((videoGame: VideoGame) => {
        this.selectedVideoGame = videoGame;
      });
  }

}
