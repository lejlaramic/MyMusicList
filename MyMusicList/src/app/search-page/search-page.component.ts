import { Component, Input, OnInit } from '@angular/core';
import { SongServiceService } from '../services/song-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [SongServiceService]
})
export class SearchPageComponent implements OnInit {
  @Input() searchTerm='';
  songs: any;
  constructor(private songService: SongServiceService) { }

  ngOnInit(): void {
  }
  search(){
    this.songService.searchSongs(this.searchTerm).subscribe((data:any)=>{
      console.log(data);
      this.songs=data;
    });

  }
}
