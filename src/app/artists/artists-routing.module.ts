import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ArtistEventsComponent } from './artist-events/artist-events.component'
import { ArtistHomeComponent } from './artist-home/artist-home.component'
import { ArtistSearchComponent } from './artist-search/artist-search.component'

const routes: Routes = [
  {
    path: '',
    component: ArtistHomeComponent,
    children: [
      { path: '', redirectTo: '/artist-search', pathMatch: 'full' },
      {
        path: 'artist-search',
        // pathMatch: 'full',
        component: ArtistSearchComponent,
      },
      {
        path: 'artist-events/:name',
        // pathMatch: 'full',
        component: ArtistEventsComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsRoutingModule {}
