import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ArtistsRoutingModule } from './artists-routing.module'
import { ArtistHomeComponent } from './artist-home/artist-home.component'
import { ArtistEventsComponent } from './artist-events/artist-events.component'
import { ArtistSearchComponent } from './artist-search/artist-search.component'
import { MaterialModule } from '../material.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DetailCardsComponent } from '@shared/components/detail-cards/detail-cards.component'
import { InfoCardsComponent } from '@shared/components/info-cards/info-cards.component'

@NgModule({
  declarations: [
    ArtistHomeComponent,
    ArtistEventsComponent,
    ArtistSearchComponent,
    DetailCardsComponent,
    InfoCardsComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ArtistsRoutingModule,
  ],
})
export class ArtistsModule {}
