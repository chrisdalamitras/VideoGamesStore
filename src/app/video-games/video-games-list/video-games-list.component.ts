import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoGame } from '../video-games.model';

@Component({
  selector: 'app-video-games-list',
  templateUrl: './video-games-list.component.html',
  styleUrls: ['./video-games-list.component.css']
})
export class VideoGamesListComponent implements OnInit {
  @Output() videoGameWasSelected = new EventEmitter<VideoGame>();

  // tslint:disable-next-line:max-line-length
  videoGameList: VideoGame[] = [new VideoGame('Resident Evil', 'Capcom', 'https://cdn.shopify.com/s/files/1/0942/1228/products/3xy8D58.jpeg?v=1439151127', 'Survive the horrors that lie in an abandoned, full of secrets mansion', '22-3-1996', 'https://www.youtube.com/embed/9uawuVAj3vo'),
  // tslint:disable-next-line:max-line-length
  new VideoGame('Devil May Cry', 'Capcom', 'https://images-na.ssl-images-amazon.com/images/I/51YCB6D1ECL.jpg', 'Use your demonic powers to save the earth from total destruction', '23-8-2001', 'https://www.youtube.com/embed/zZIKeE199Tk')];

  constructor() { }

  ngOnInit() {
  }

  onVideoGameSelected(videoGame: VideoGame) {
    this.videoGameWasSelected.emit(videoGame);
  }

}
