import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@env/environment'
import { Observable } from 'rxjs'
import { share } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  searchArtist(name: string): Observable<any> {
    return this.http
      .get(environment.apiUrl + `/artists/${name}?app_id=1`)
      .pipe(share())
  }

  artistDetails(artistName: any): Observable<any> {
    return this.http
      .get(environment.apiUrl + `/artists/${artistName}/events?app_id=1`)
      .pipe(share())
  }
}
