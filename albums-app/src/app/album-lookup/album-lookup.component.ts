import {Component, OnInit, ViewChild} from '@angular/core';
import {LookupFormComponent} from '../lookup-form/lookup-form.component';

@Component({
  selector: 'app-album-lookup',
  templateUrl: './album-lookup.component.html',
  styleUrls: ['./album-lookup.component.css']
})
export class AlbumLookupComponent implements OnInit {
  @ViewChild('albums', {static: true}) lookupFormComponent: LookupFormComponent;

  constructor() { }

  ngOnInit(): void {
  }

  getAlbums() {
    return this.lookupFormComponent.albums;
  }
}
