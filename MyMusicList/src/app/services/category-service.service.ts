import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  url = "https://localhost:5001/api/category/"
  constructor(private http: HttpClient) { }
  getCategories(){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');
    return this.http.get(this.url+ 'getCategories', {'headers': headers} );
  }
  getCategoryById(id: any){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');
    return this.http.get(this.url+ 'categoryById/'+id, {'headers': headers} );
  }
  getCategoryByName(name: any){
    const headers= new HttpHeaders()
    .set('content-type', 'application/json');
    return this.http.get(this.url+ 'categoryByName/'+name, {'headers': headers} );
  }
}
