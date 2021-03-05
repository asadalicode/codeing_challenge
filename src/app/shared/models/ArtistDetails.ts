export class ArtistDetails {
  id: number
  artist_id: number
  url: string
  on_sale_datetime: string
  datetime: string
  description: string
  venue: object
  offers: Array<[]>
  lineup: Array<[]>

  constructor() {}
}
