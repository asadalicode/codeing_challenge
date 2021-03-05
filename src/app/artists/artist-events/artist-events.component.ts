import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ApiService } from 'src/app/services/api.service'
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { ArtistDetails } from '@shared/models/artistDetails'
@Component({
  selector: 'app-artist-events',
  templateUrl: './artist-events.component.html',
  styleUrls: ['./artist-events.component.scss'],
})
export class ArtistEventsComponent implements OnInit {
  artistDetails$: Observable<ArtistDetails>
  constructor(
    private media: MediaObserver,
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
    // Get route Params
    this.route.params.subscribe((res: any) => {
      this.getArtistDetails(res.name)
    })
  }
  ngOnInit(): void {}

  //Media observer to check device
  get isMobile(): boolean {
    return this.media.isActive('xs')
  }

  //Pass required params to get Artist Details and create an Observable
  getArtistDetails(params: any) {
    this.artistDetails$ = this.apiService.artistDetails(params)
  }
}
