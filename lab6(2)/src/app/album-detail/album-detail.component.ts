import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';
import {Albums} from '../albums/module';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Albums;
  loading: boolean;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) {}

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.album = ALBUMS.find((x) => x.id === id);

    // this.route.paramMap.subscribe((params) => {
    //   const id = Number(params.get('id'));
    //   this.getAlbum(id);
    // });
    this.getAlbum();
  }

  getAlbum(){
    this.route.paramMap.subscribe( (params) => {
      const id = Number(params.get('id'));
      this.loading = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loading = true;
      });
    });
  }

  updateAlbum() {
    this.loading = false;
    this.albumsService.updateAlbum(this.album).subscribe((album) => {
      console.log(album);
      this.loading = true;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
