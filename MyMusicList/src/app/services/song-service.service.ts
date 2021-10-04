import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {
  url = "https://localhost:5001/api/song/";
  queryUrl: string = '?search=';
  constructor(private http: HttpClient) { }
  getSongs(){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');
    return this.http.get(this.url+ 'getSongs', {'headers': headers} );
  }
  getSongById(id: any){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');
    return this.http.get(this.url+ 'songById/'+id, {'headers': headers} );
  }
  addSong(form: any, selectedRadio:Boolean, categoryId: any, grade:string){  
    const headers= new HttpHeaders()
      .set('content-type', 'application/json');
      console.log(form.enterDate);
      var addSongData = {
          "nameOfSong":form.nameOfSong,
          "nameOfSinger": form.nameOfSinger,
          "favorite": selectedRadio,     
          "songEntryDate": form.enterDate,
          "songLastEdit": form.enterDate,
          "urlOfSong": form.url,
          "songRating": parseInt(grade),
          "categoryId": categoryId
      }
    return this.http.post(this.url + 'addSong', JSON.stringify(addSongData), { 'headers': headers });
  }
  editSong(form: any, selectedRadio:Boolean, categoryId: any, grade:string, date: any, songId: any){  
    const headers= new HttpHeaders()
      .set('content-type', 'application/json');
      var editSongData = {
          "nameOfSong":form.nameOfSong,
          "nameOfSinger": form.nameOfSinger,
          "favorite": selectedRadio,     
          "songEntryDate": date,
          "urlOfSong": form.url,
          "songRating": parseInt(grade),
          "categoryId": categoryId
      }
      console.log(editSongData);
    return this.http.put(this.url + 'updateSong/'+songId, JSON.stringify(editSongData), { 'headers': headers });
  }
  deleteSong(songId:string){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');
    return this.http.delete(this.url+ 'deleteSong/'+ songId, {'headers': headers});
  }
  searchSongs(searchTerm: any){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');
    return this.http.get(this.url+ 'searchSongs' + this.queryUrl+ searchTerm, {'headers': headers} );

  }
}
