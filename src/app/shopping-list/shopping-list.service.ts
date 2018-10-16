import { VideoGameInShoppingList } from '../shared/video-game-in-shopping-list.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    videoGamesInCartChanged = new Subject<VideoGameInShoppingList[]>();

    private videoGamesInCart: VideoGameInShoppingList[] = [];

    getVideoGamesInCart() {
        return this.videoGamesInCart.slice(); // we use slice so we get o copy of the array not the actual reference to the array
    }

    addVideoGame(item: VideoGameInShoppingList) {
        this.videoGamesInCart.push(item);
        this.videoGamesInCartChanged.next(this.videoGamesInCart.slice());
    }

}
