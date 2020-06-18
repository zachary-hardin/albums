import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumLookupComponent } from './album-lookup.component';

describe('AlbumLookupComponent', () => {
  let component: AlbumLookupComponent;
  let fixture: ComponentFixture<AlbumLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumLookupComponent ]
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
});
