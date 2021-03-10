import { Component, OnInit } from '@angular/core';
import {Album} from '../album';
import {ALBUMS} from '../fake-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  constructor() {
    this.albums = [];
  }

  ngOnInit(): void {
    this.albums = ALBUMS;
  }

}
