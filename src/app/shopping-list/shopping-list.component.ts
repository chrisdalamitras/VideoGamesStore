import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoGameInShoppingList } from '../shared/video-game-in-shopping-list.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  videoGamesInCart: VideoGameInShoppingList[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.videoGamesInCart = this.shoppingListService.getVideoGamesInCart();
    this.subscription = this.shoppingListService.videoGamesInCartChanged
      .subscribe((newVideoGamesInCart: VideoGameInShoppingList[]) => {
        this.videoGamesInCart = newVideoGamesInCart;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
