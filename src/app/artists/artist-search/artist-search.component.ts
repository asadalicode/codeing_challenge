import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MediaObserver } from '@angular/flex-layout'
import { ApiService } from 'src/app/services/api.service'
import { Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { ArtistInfo } from '@shared/models/ArtistInfo'

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss'],
})
export class ArtistSearchComponent implements OnInit {
  searchFormControl = new FormControl('')
  public result$: Observable<ArtistInfo[]>
  constructor(private media: MediaObserver, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getSearchValue()
  }

  //Media observer to check device
  get isMobile(): boolean {
    return this.media.isActive('xs')
  }

  //Get Searched Value from input Field and call to API
  getSearchValue() {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((res) => {
        this.getArtistInfo(res.trim())
      })
  }

  // API call to get Artist Info
  getArtistInfo(res: string) {
    this.result$ = this.apiService.searchArtist(res)
  }
}
