import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LookupFormComponent} from './lookup-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {enterText} from '../testing/Helper';

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
    it('should set placeholder text to "Enter a number 1 - 100"', () => {
      const placeholderText = 'Enter a number 1 - 100';
      expect(albumInputElement.placeholder).toEqual(placeholderText);
    });

    it('should update the form when given a value', () => {
      enterText(albumInputElement, '1');
      expect(component.form.get('albumId').value).toEqual('1');
    });
  });

  describe('SearchButton', () => {
    it('should contain text that reads "Search"', () => {
      expect(searchButtonElement.textContent).toEqual('Search');
    });

    it('should call searchClicked when button is clicked', () => {
      spyOn(component, 'searchClicked');
      searchButtonElement.click();

      expect(component.searchClicked).toHaveBeenCalled();
    });
  });
});
