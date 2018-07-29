import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoGamesComponent } from './video-games/video-games.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { VideoGameStartComponent } from './video-games/video-game-start/video-game-start.component';
import { VideoGamesDetailsComponent } from './video-games/video-games-details/video-games-details.component';
import { VideoGameEditComponent } from './video-games/video-game-edit/video-game-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/videoGames', pathMatch: 'full' },
    {
        path: 'videoGames', component: VideoGamesComponent, children: [
        {path: '', component: VideoGameStartComponent},
        {path: 'new', component: VideoGameEditComponent},
        {path: ':id', component: VideoGamesDetailsComponent},
        {path: ':id/edit', component: VideoGameEditComponent}
    ] },
    { path: 'shoppingList', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
