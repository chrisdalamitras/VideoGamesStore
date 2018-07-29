import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-games.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { VideoGameInShoppingList } from '../../shared/video-game-in-shopping-list.model';
import { VideoGamesService } from '../video-games-list/video-games.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-video-games-details',
  templateUrl: './video-games-details.component.html',
  styleUrls: ['./video-games-details.component.css']
})
export class VideoGamesDetailsComponent implements OnInit {
  videoGameDetails: VideoGame;
  sanitizedUrl;
  id: number;

  constructor(public sanitizer: DomSanitizer,
    private shoppingListService: ShoppingListService,
    private videoGamesService: VideoGamesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.videoGameDetails = this.videoGamesService.getVideoGame(this.id);
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoGameDetails.trailerPath);
      }
    );
  }

  AddToCart() {
    this.shoppingListService.addVideoGame(new VideoGameInShoppingList(this.videoGameDetails.name, 1));
  }

}
