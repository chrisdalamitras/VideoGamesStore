import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { VideoGame } from '../../video-games.model';

@Component({
  selector: 'app-video-games-item',
  templateUrl: './video-games-item.component.html',
  styleUrls: ['./video-games-item.component.css']
})
export class VideoGamesItemComponent implements OnInit {
  @Input() videoGameItem: VideoGame;
  @Output() videoGameSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.videoGameSelected.emit();
  }

}
