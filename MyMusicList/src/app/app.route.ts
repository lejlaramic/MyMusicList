import { Routes } from '@angular/router';
import { AddNewSongPageComponent } from './add-new-song-page/add-new-song-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { EditSongPageComponent } from './edit-song-page/edit-song-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';




export const routes: Routes = [
  {
    path: '', redirectTo: '/Home/Card', pathMatch: 'full'
  },
  { path: 'Home', component:  HomePageComponent,
  children: [
    {
      path: 'Card', 
      component: CardPageComponent, 
    },
    {
      path: 'Edit',
      component: EditSongPageComponent, 
    },
    {
      path: 'AddNew',
      component: AddNewSongPageComponent, 
    },
    {
      path: 'Search',
      component: SearchPageComponent, 
    }
  ]
}
 
];
