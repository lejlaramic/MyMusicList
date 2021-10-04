import { Category } from "./Category";

export class Song {
    id: string;
    nameOfSong: string;
    nameOfSinger: string;
    favorite: string;
    enterDate: Date;
    urlOfSong: string;
    lastEdited: Date;  
    category: Category;
    songRating: string;
    
    constructor(id: string,
        nameOfSong: string,
    nameOfSinger: string,
    favorite: string,
    enterDate: Date,
    url: string,
    lastEdited: Date, 
    category: Category,
    songRating: string) {
      this.id = id;
      this.nameOfSong=nameOfSong;
      this.nameOfSinger=nameOfSinger;
      this.favorite = favorite;
      this.enterDate=enterDate;
      this.urlOfSong=url;
      this.lastEdited=lastEdited;
      this.songRating=songRating;
      this.category=category;
    }
  
  }
  