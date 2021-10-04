import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddNewSongPageComponent } from './add-new-song-page/add-new-song-page.component';
import { EditSongPageComponent } from './edit-song-page/edit-song-page.component';
import { HeaderComponent } from './header/header.component';
import { CardPageComponent } from './card-page/card-page.component';
import { DatePipe } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddNewSongPageComponent,
    EditSongPageComponent,
    HeaderComponent,
    CardPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MaterialModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
