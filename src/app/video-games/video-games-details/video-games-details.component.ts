import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { VideoGame } from '../video-games.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { VideoGameInShoppingList } from '../../shared/video-game-in-shopping-list.model';

@Component({
  selector: 'app-video-games-details',
  templateUrl: './video-games-details.component.html',
  styleUrls: ['./video-games-details.component.css']
})
export class VideoGamesDetailsComponent implements OnInit, OnChanges {
  @Input() videoGameDetails: VideoGame;
  sanitizedUrl;
  currentRate = 4.5;

  constructor(public sanitizer: DomSanitizer, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoGameDetails.trailerPath);
  }

  AddToCart() {
    this.shoppingListService.addVideoGame(new VideoGameInShoppingList(this.videoGameDetails.name, 1));
  }

}
