import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PhotosService} from '../services/photos-service';
import {take} from 'rxjs/operators';
import {Album} from '../models/Album';

@Component({
  selector: 'app-lookup-form',
  templateUrl: './lookup-form.component.html',
  styleUrls: ['./lookup-form.component.css']
})
export class LookupFormComponent implements OnInit {
  form: FormGroup;
  albums: Album[] = [];


  constructor(private photoService: PhotosService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      albumId: new FormControl('')
    });
  }

  isPhotosEmpty() {
    return this.albums.length === 0;
  }

  searchClicked() {
    const albumId = this.form.get('albumId').value;
    this.photoService.fetchPhotosBy(albumId).pipe(take(1)).subscribe(responseData => {
      this.albums = responseData;
    });
  }
}
