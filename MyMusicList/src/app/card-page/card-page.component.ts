import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from '../models/Song';
import { SongServiceService } from '../services/song-service.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css'],
  providers: [SongServiceService]
})
export class CardPageComponent implements OnInit {
  gridColumns = 4;
  @Input() songs :Array<Song> = [];
  constructor(private router: Router, private songService: SongServiceService) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe((data:any)=> {
      console.log(data);
      this.songs=data;
      this.songs.sort((a: any, b: any) => (
        a.id - b.id));
    });
  }
  edit(id:any){
    this.songService.getSongById(id).subscribe(data=>{
      this.router.navigate(['/Home/Edit'], {queryParams:  { song: JSON.stringify(data) }});
    });
  }
  delete(id:any){
    if(confirm("Are you sure you want to delete song?")) {
      this.songService.deleteSong(id).subscribe((data:any)=>{
        console.log(data);
        alert(data.message);
      });
      for(let i=0; i<this.songs.length; i++){
        if(this.songs[i].id== id){
        this.songs.splice(i, 1);
       
        }
  
      }

    }
  }
  show(favorite: any): Boolean{
    if(favorite==true) return true;
    return false;
  }
  show2(favorite: any): Boolean{
    if(favorite==false) return true;
    return false;
  }

}
