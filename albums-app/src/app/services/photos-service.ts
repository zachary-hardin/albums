import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private http: HttpClient) {
  }

  fetchPhotosBy(): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/photos?albumId=3`);
  }
}
