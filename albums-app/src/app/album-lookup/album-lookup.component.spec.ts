import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {AlbumLookupComponent} from './album-lookup.component';
import {AlbumService} from '../services/album.service';
import {Album} from '../models/Album';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {LookupFormComponent} from '../lookup-form/lookup-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {enterText} from '../testing/Helper';

describe('AlbumLookupComponent', () => {
  let component: AlbumLookupComponent;
  let fixture: ComponentFixture<AlbumLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [AlbumLookupComponent, LookupFormComponent]
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

  describe('Album Content', () => {
    it('should hide albums by default', () => {
      expect(fixture.nativeElement.querySelector('#id')).toBeFalsy();
    });

    it('should show albums when photos is not empty', inject([AlbumService], (albumService: AlbumService) => {
      const album = new Album();
      album.id = 93;
      spyOn(albumService, 'fetchAlbumBy').and.returnValue(of([album]));

      fixture.nativeElement.querySelector('#searchButton').click();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#id')).toBeTruthy();
    }));

    it('should render the id when searchClicked is called', inject([AlbumService], (albumService: AlbumService) => {
      const album = new Album();
      album.id = 93;
      spyOn(albumService, 'fetchAlbumBy').and.returnValue(of([album]));

      fillOutForm();

      expect(fixture.nativeElement.querySelector('#id').textContent).toEqual('93');
    }));
  });

  function fillOutForm() {
    enterText(fixture.nativeElement.querySelector('#albumInput'), '12');
    fixture.nativeElement.querySelector('#searchButton').click();
    fixture.detectChanges();
  }
});
