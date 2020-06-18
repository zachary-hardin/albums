import {async, TestBed} from '@angular/core/testing';
import {AlbumService} from './album.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AlbumService', () => {
  let albumService: AlbumService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: []
    })
      .compileComponents();

    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    albumService = TestBed.get(AlbumService);
  });

  it('should perform GET on endpoint with given albumId', () => {
    albumService.fetchAlbumBy('5').subscribe();

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/photos?albumId=5');
    expect(req.request.method).toEqual('GET');
    req.flush({});
  });
});
