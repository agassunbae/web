import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AlbumPhotos, Albums} from './albums/module';
import {ALBUMS} from './albums/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  options = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private client: HttpClient) { }

  // getAlbums(): Observable<Album[]> {
  //   return of(ALBUMS);
  // }
  //
  // getAlbum(id: number): Observable<Album> {
  //   const album = ALBUMS.find((x) => x.id === id);
  //   return of(album);
  // }

  getAlbums(): Observable<Albums[]> {
    return this.client.get<Albums[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Albums> {
    const album = ALBUMS.find((x) => x.id === id);
    return this.client.get<Albums>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Albums): Observable<any> {
    return this.client.post<any>(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(album: Albums): Observable<any> {
    return this.client.put<any>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/albums/${id}`);
  }

  getPhoto(id: number): Observable<AlbumPhotos[]>{
    return this.client.get<AlbumPhotos[]>( `${this.BASE_URL}/albums/${id}/photos` );
  }
}


