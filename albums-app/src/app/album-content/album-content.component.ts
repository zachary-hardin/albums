import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../models/Album';

@Component({
  selector: 'app-album-content',
  templateUrl: './album-content.component.html',
  styleUrls: ['./album-content.component.css']
})
export class AlbumContentComponent implements OnInit {
  @Input() albums: Album[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
