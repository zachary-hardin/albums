import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumContentComponent } from './album-content.component';
import {Album} from '../models/Album';

describe('AlbumContentComponent', () => {
  let component: AlbumContentComponent;
  let fixture: ComponentFixture<AlbumContentComponent>;

  const album = new Album();
  album.id = 1;
  album.title = 'FizzBuzz';
  album.thumbnailUrl = 'https://giphy.com/gifs/cat-funny-lol-CqVNwrLt9KEDK';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate the id', () => {
    component.albums = [album];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#id').textContent).toEqual('1');
  });

  it('should populate the title', () => {
    component.albums = [album];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#title').textContent).toEqual('FizzBuzz');
  });

  it('should populate the thumbnailUrl', () => {
    component.albums = [album];
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#thumbnailUrl').src).toEqual('https://giphy.com/gifs/cat-funny-lol-CqVNwrLt9KEDK');
  });
});
