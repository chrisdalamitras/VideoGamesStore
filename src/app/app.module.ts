import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { VideoGamesListComponent } from './video-games/video-games-list/video-games-list.component';
import { VideoGamesDetailsComponent } from './video-games/video-games-details/video-games-details.component';
import { VideoGamesItemComponent } from './video-games/video-games-list/video-games-item/video-games-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    VideoGamesListComponent,
    VideoGamesDetailsComponent,
    VideoGamesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
