import { Component, OnInit } from '@angular/core';
import { VideoGameInShoppingList } from '../shared/video-game-in-shopping-list.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  videoGamesInCart: VideoGameInShoppingList[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.videoGamesInCart = this.shoppingListService.getVideoGamesInCart();
    this.shoppingListService.videoGamesInCartChanged
      .subscribe((newVideoGamesInCart: VideoGameInShoppingList[]) => {
        this.videoGamesInCart = newVideoGamesInCart;
      });
  }

}
