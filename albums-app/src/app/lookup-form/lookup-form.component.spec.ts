import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {LookupFormComponent} from './lookup-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PhotosService} from '../services/photos-service';
import {of} from 'rxjs';
import {Album} from '../models/Album';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LookupFormComponent', () => {
  let component: LookupFormComponent;
  let fixture: ComponentFixture<LookupFormComponent>;
  let albumInputElement: HTMLInputElement;
  let searchButtonElement: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [LookupFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    albumInputElement = fixture.nativeElement.querySelector('input#albumInput');
    searchButtonElement = fixture.nativeElement.querySelector('button#searchButton');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('AlbumInput', () => {
    it('should render an input element', () => {
      expect(albumInputElement).toBeTruthy();
    });

    it('should set placeholder text to "Enter a number 1 - 100"', () => {
      const placeholderText = 'Enter a number 1 - 100';
      expect(albumInputElement.placeholder).toEqual(placeholderText);
    });

    it('should update the form when given a value', () => {
      enterText(albumInputElement, '1');
      expect(component.form.get('albumId').value).toEqual('1');
    });
  });

  describe('Button', () => {
    it('should render a button element', () => {
      expect(searchButtonElement).toBeTruthy();
    });

    it('should contain text that reads "Search"', () => {
      expect(searchButtonElement.textContent).toBeTruthy();
    });

    it('should trigger the searchClicked when button is clicked', () => {
      spyOn(component, 'searchClicked');
      searchButtonElement.click();

      expect(component.searchClicked).toHaveBeenCalled();
    });
  });

  describe('Album Content', () => {
    it('should hide albums when photos is empty', () => {
      component.albums = [];
      expect(fixture.nativeElement.querySelector('#photoId')).toBeFalsy();
    });

    it('should show albums when photos is not empty', inject([PhotosService], (photosService: PhotosService) => {
      const album = new Album();
      album.id = 93;
      spyOn(photosService, 'fetchPhotosBy').and.returnValue(of([album]));
      component.searchClicked();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#photoId')).toBeTruthy();
    }));

    it('should render the id when searchClicked is called', inject([PhotosService], (photosService: PhotosService) => {
      const album = new Album();
      album.id = 93;
      spyOn(photosService, 'fetchPhotosBy').and.returnValue(of([album]));

      component.form.patchValue({albumId: '12'});
      component.searchClicked();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#photoId').textContent).toEqual('93');
    }));
  });

  function enterText(element: HTMLInputElement, text: string) {
    element.value = text;
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }
});
