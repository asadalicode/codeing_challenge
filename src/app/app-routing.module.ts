import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './not-found/page-not-found/page-not-found.component'
const routes: Routes = [
  {
    path: '',
    loadChildren: './artists/artists.module#ArtistsModule',
  },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
