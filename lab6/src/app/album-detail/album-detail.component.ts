import { Component, OnInit } from '@angular/core';
import {Album} from '../album';
import {ActivatedRoute} from '@angular/router';
import {ALBUMS} from '../fake-albums';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.album = ALBUMS.find((x) => x.id === id);

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.album = ALBUMS.find((x) => x.id === id);
    });
  }

}
