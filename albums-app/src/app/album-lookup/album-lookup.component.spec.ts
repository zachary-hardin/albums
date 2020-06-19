import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {AlbumLookupComponent} from './album-lookup.component';
import {AlbumService} from '../services/album.service';
import {Album} from '../models/Album';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LookupFormComponent} from '../lookup-form/lookup-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {enterText} from '../testing/Helper';
import {AlbumContentComponent} from '../album-content/album-content.component';

describe('AlbumLookupComponent', () => {
  let component: AlbumLookupComponent;
  let fixture: ComponentFixture<AlbumLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [AlbumLookupComponent, AlbumContentComponent, LookupFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide albums by default', () => {
    expect(fixture.nativeElement.querySelector('#id')).toBeFalsy();
  });

  it('should render the element with the returned album content', inject([AlbumService], (albumService: AlbumService) => {
    const album = new Album();
    album.id = 93;
    album.thumbnailUrl = 'some-url.com';
    album.title = 'some title';
    spyOn(albumService, 'fetchAlbumBy').and.returnValue(of([album]));

    fillOutForm();

    expect(fixture.nativeElement.querySelector('#id').textContent).toEqual('Album #93');
    expect(fixture.nativeElement.querySelector('#thumbnailUrl').src).toContain('some-url.com');
    expect(fixture.nativeElement.querySelector('#title').textContent).toEqual('some title');
  }));

  function fillOutForm() {
    enterText(fixture.nativeElement.querySelector('#albumInput'), '12');
    fixture.nativeElement.querySelector('#searchButton').click();
    fixture.detectChanges();
  }
});
