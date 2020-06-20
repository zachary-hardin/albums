import {async, TestBed} from '@angular/core/testing';
import {AlbumService} from './album.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

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

  it('should return a list of albums', () => {
    const http = TestBed.get(HttpClient);
    spyOn(http, 'get').and.returnValue([{
      albumId: 12,
      id: 551,
      title: 'Grumpy Cats',
      url: 'https://giphy.com/gifs/cat-laugh-funny-q1MeAPDDMb43K',
      thumbnailUrl: 'https://giphy.com/gifs/C9x8gX02SnMIoAClXa'
    }]);

    const albums = albumService.fetchAlbumBy('2');
    expect(albums[0].albumId).toBe(12);
    expect(albums[0].id).toBe(551);
    expect(albums[0].title).toBe('Grumpy Cats');
    expect(albums[0].url).toBe('https://giphy.com/gifs/cat-laugh-funny-q1MeAPDDMb43K');
    expect(albums[0].thumbnailUrl).toBe('https://giphy.com/gifs/C9x8gX02SnMIoAClXa');
  });
});
