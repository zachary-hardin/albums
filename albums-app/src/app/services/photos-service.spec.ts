import {async, TestBed} from '@angular/core/testing';
import {PhotosService} from './photos-service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PhotosService', () => {
  let photoService: PhotosService;
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
    photoService = TestBed.get(PhotosService);
  });

  it('should perform GET on the correct endpoint', () => {
    photoService.fetchPhotosBy().subscribe();

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/photos?albumId=3');
    expect(req.request.method).toEqual('GET');
    req.flush({});
  });
});
