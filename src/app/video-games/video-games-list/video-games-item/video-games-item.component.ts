import { Component, OnInit, Input } from '@angular/core';
import { VideoGame } from '../../video-games.model';
import { VideoGamesService } from '../video-games.service';

@Component({
  selector: 'app-video-games-item',
  templateUrl: './video-games-item.component.html',
  styleUrls: ['./video-games-item.component.css']
})
export class VideoGamesItemComponent implements OnInit {
  @Input() videoGameItem: VideoGame;

  constructor(private videoGamesService: VideoGamesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.videoGamesService.videoGameSelected.emit(this.videoGameItem);
  }

}
