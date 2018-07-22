import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoGamesComponent } from './video-games/video-games.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/videoGames', pathMatch: 'full' },
    { path: 'videoGames', component: VideoGamesComponent },
    { path: 'shoppingList', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
