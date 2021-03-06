import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AlbumService} from '../services/album.service';
import {take} from 'rxjs/operators';
import {Album} from '../models/Album';

@Component({
  selector: 'app-lookup-form',
  templateUrl: './lookup-form.component.html'
})
export class LookupFormComponent implements OnInit {
  form: FormGroup;
  albums: Album[] = [];

  constructor(private photoService: AlbumService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      albumId: new FormControl('')
    });
  }

  searchClicked() {
    const albumId = this.form.get('albumId').value;
    this.photoService.fetchAlbumBy(albumId).pipe(take(1)).subscribe(responseData => {
      this.albums = responseData;
    });
  }
}
