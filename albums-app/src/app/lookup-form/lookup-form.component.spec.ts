import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LookupFormComponent} from './lookup-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('LookupFormComponent', () => {
  let component: LookupFormComponent;
  let fixture: ComponentFixture<LookupFormComponent>;
  let albumInputElement: HTMLInputElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LookupFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    albumInputElement = fixture.nativeElement.querySelector('input#albumInput');
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

  function enterText(element: HTMLInputElement, text: string) {
    element.value = text;
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }
});
