import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';
import { Song } from '../models/Song';
import { CategoryServiceService } from '../services/category-service.service';
import { SongServiceService } from '../services/song-service.service';
interface Grade {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-song-page',
  templateUrl: './edit-song-page.component.html',
  styleUrls: ['./edit-song-page.component.css']
})
export class EditSongPageComponent implements OnInit {
  grades: Grade[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}

  ];
  isReadOnly:any=true;
  isReadOnlyAlways:any=true;
  song: any;
  songs:any=[];
  formGroup: FormGroup;
  src: any;
  showErr=false;
  show = true;
  showRadio = true;
  selectedRadio: Boolean = true; 
  dateEdit: any;
  date: any;
  selectedValue:any;
  selectedCategory:any;
  categories: any=[];
  errorMessage: any='';
  change: any=0;
  selectMatChange: any=false;
  selectMatChange2: any=false;
  changeName:any=false;
  changeSinger:any=false;
  changeUrl:any=false;
  @ViewChild("testInput") testInput: any;
  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,  private route: ActivatedRoute, public datepipe: DatePipe, private categoriesService: CategoryServiceService, private songService: SongServiceService) { 
    this.formGroup= this.formBuilder.group({
      'nameOfSong': [null],
      'nameOfSinger': [null],
      'url': [null],
      'favorite': [null],
      'songEntryDate': [null],
      'songLastEdit': [null],
      'songRating': [null],
      'category': [null]
    }); 
  }

  ngOnInit(): void {
     this.categoriesService.getCategories().subscribe((data:any)=>{
      console.log(data);
      this.categories=data;});

    this.route.queryParamMap.subscribe((params: any) =>{
      this.song=JSON.parse(params.params.song);
      var id=this.song.id;
      this.songService.getSongById(id).subscribe((data:any)=>{
      this.song=data;
      this.formGroup.controls['nameOfSong'].setValue(data.nameOfSong);
      this.formGroup.controls['nameOfSinger'].setValue(data.nameOfSinger);
      this.formGroup.controls['url'].setValue(data.urlOfSong);
      this.src=data.urlOfSong;
      if(data.favorite==true){
      this.formGroup.controls['favorite'].setValue('Yes');
      this.selectedRadio=true;
      }
      else {
        this.formGroup.controls['favorite'].setValue('No');
        this.selectedRadio=false;
      }
      this.date= this.datepipe.transform(data.songEntryDate, 'yyyy-MM-dd');
      this.dateEdit= this.datepipe.transform(data.songLastEdit, 'yyyy-MM-dd') 
      this.formGroup.controls['songRating'].setValue(data.songRating);
      this.formGroup.controls['category'].setValue(data.category.songCategory);
      this.selectedValue=data.songRating.toString();
      this.selectedCategory=data.category.songCategory.toString();
      });
    });
  }
   radioChange(event:any){
     this.change=1;
    console.log(this.selectedRadio);
  }
  selectChange(event:any){
  this.selectMatChange=true;
   console.log(this.selectedValue);
 }
 selectChange2(event:any){
  this.selectMatChange2=true;
   console.log(this.selectedCategory);
 }
  editFields(){
    this.isReadOnly=false;
    this.show=false;
    this.testInput.nativeElement.focus();
  }
  editSong(form: any){      
    if(this.isReadOnly==true){
      this.showErr= true;
      this.errorMessage = "Please edit fields if you want to save changes!";
      setTimeout(()=>{this.showErr = false;}, 3000);
    }
    else if(this.changeName==false && this.changeSinger==false &&
    this.changeUrl==false &&  this.change == 0 && this.selectMatChange==false && this.selectMatChange2==false)
    {
      alert("Song in database is the same as it was!");
      this.isReadOnly=true;
      this.show=true;
    }
    else if(this.formGroup.valid && this.isReadOnly==false){
      this.categoriesService.getCategoryByName(this.selectedCategory).subscribe((data:any)=>{
        this.songService.editSong(form, this.selectedRadio, data.categoryId, this.selectedValue, this.date, this.song.id).subscribe((data:any) => {
          console.log(data);
          alert(data.message);
          this.change=0;
          this.selectMatChange=false;
          this.selectMatChange2=false;
          this.isReadOnly=true;
          this.show=true;
          this.changeName=false;
          this.changeSinger=false;
          this.changeUrl=false;
          this.ngOnInit();
        }, 
        error => {  
          console.log(error); 
          this.showErr = true;
          if(error.error.title!=null) this.errorMessage = error.error.title;
          else if(error.error!=null) this.errorMessage = error.error;
          else this.errorMessage = "Error!";
          setTimeout(()=>{this.showErr = false;}, 3000);
        }
      );
      });
    }
    else{
      this.showErr= true;
      this.errorMessage = "Please fill required fields!";
      setTimeout(()=>{this.showErr = false;}, 3000);
    }  
  }
 
  changeFn(event: any){
    this.changeName=true;

  }
  changeFn2(event: any){
    this.changeSinger=true;

  }
  changeFn3(event: any){
    this.changeUrl=true;

  }
}
