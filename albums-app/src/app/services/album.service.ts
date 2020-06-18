import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Album} from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) {
  }

  fetchAlbumBy(albumId: string): Observable<Album[]> {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
}
