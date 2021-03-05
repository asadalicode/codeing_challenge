import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ArtistsModule } from './artists/artists.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './not-found/page-not-found/page-not-found.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    ArtistsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
