import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { VideoGameInShoppingList } from '../../shared/video-game-in-shopping-list.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<VideoGameInShoppingList>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const itemName = this.nameInputRef.nativeElement.value;
    const itemAmount = this.amountInputRef.nativeElement.value;
    const newItem = new VideoGameInShoppingList(itemName, itemAmount);
    this.itemAdded.emit(newItem);
  }

}
