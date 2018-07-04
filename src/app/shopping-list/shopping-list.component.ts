import { Component, OnInit } from '@angular/core';
import { VideoGameInShoppingList } from '../shared/video-game-in-shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  videoGamesInCart: VideoGameInShoppingList[] = [new VideoGameInShoppingList('Devil May Cry', 2),
  new VideoGameInShoppingList('Resident Evil', 1)];

  constructor() { }

  ngOnInit() {
  }

}
