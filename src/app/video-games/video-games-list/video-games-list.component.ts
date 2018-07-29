import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-games.model';
import { VideoGamesService } from './video-games.service';

@Component({
  selector: 'app-video-games-list',
  templateUrl: './video-games-list.component.html',
  styleUrls: ['./video-games-list.component.css']
})
export class VideoGamesListComponent implements OnInit {
  videoGameList: VideoGame[];

  constructor(private videoGamesService: VideoGamesService) { }

  ngOnInit() {
    this.videoGameList = this.videoGamesService.getVideoGamesList();
  }

}
