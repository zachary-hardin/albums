import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LookupFormComponent} from './lookup-form.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('LookupFormComponent', () => {
  let component: LookupFormComponent;
  let fixture: ComponentFixture<LookupFormComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('AlbumInput', () => {
    it('should render an input element', () => {
      expect(fixture.nativeElement.querySelector('input#albumInput')).toBeTruthy();
    });

    it('should set placeholder text to "Enter a number 1 - 100"', () => {
      const placeholderText = 'Enter a number 1 - 100';
      expect(fixture.nativeElement.querySelector('input#albumInput').placeholder).toEqual(placeholderText);
    });

    it('should update the form when given a value', () => {
      const input = fixture.nativeElement.querySelector('input#albumInput');
      enterText(input, '1');

      expect(component.form.get('albumId').value).toEqual('1');
    });
  });

  function enterText(element: HTMLInputElement, text: string) {
    element.value = text;
    element.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }
});
