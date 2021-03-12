import { Component, OnInit } from '@angular/core';
import {AlbumsService} from '../albums.service';
import {Albums} from './module';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Albums[];
  loading: boolean;
  newAlbum: string;
  constructor(private albumService: AlbumsService) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums() {
    this.loading = false;
    this.albumService.getAlbums().subscribe(((albums) => {
      this.albums = albums;
      this.loading = true;
    }));
  }
  addAlbum() {
    const album = {
      title: this.newAlbum
    };
    this.loading = false;
    this.albumService.addAlbum(album as Albums).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loading = true;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }
}
