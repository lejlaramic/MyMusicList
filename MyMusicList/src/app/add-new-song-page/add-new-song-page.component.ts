import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from '../models/Category';
import { CategoryServiceService } from '../services/category-service.service';
import { SongServiceService } from '../services/song-service.service';
interface Grade {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-new-song-page',
  templateUrl: './add-new-song-page.component.html',
  styleUrls: ['./add-new-song-page.component.css'],
  providers: [CategoryServiceService]
})
export class AddNewSongPageComponent implements OnInit {
  form: FormGroup;
  grades: Grade[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}

  ];
  categories: any=[];
  selectedRadio: Boolean = true; 
  show = false;
  errorMessage:any;
  selectedCategory:any;
  selectedValue:any;
  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder, private categoriesService: CategoryServiceService, private songService: SongServiceService) {
    this.form = this.formBuilder.group({
      'nameOfSong': [null],
      'nameOfSinger': [null],
      'url': [null],
      'favorit': [null],
      'enterDate': [null]
    }); 
   }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data:any)=>{
      console.log(data);
      this.categories=data;});

  }
  radioChange(event:any){
    console.log(this.selectedRadio);
  }
  addSong(form:any){
    console.log(this.selectedCategory);
    if(this.form.valid && this.selectedCategory!=null && this.selectedValue!=null){

    this.songService.addSong(form, this.selectedRadio, this.selectedCategory.categoryId, this.selectedValue).subscribe((data:any) => {
      console.log(data);
      alert(data.message);
      this.form.reset();
      this.selectedCategory=null;
      this.selectedValue=null;
      this.selectedRadio= true;
    }, 
    error => {  
      console.log(error); 
      this.show = true;
      if(error.error.title!=null) this.errorMessage = error.error.title;
      else if(error.error!=null) this.errorMessage = error.error;
      else this.errorMessage = "Error!";
      setTimeout(()=>{this.show = false;}, 3000);   
    }
  ); 
    }else{
      this.show = true;
      this.errorMessage = "Please fill required fields!";
      setTimeout(()=>{this.show = false;}, 3000);

    }
  }
}
