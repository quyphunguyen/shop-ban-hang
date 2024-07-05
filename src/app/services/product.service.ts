import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../environments/environment";
import {from, Observable} from "rxjs";
import {UserDTO} from "../dto/UserDTO";
import {ProductCard} from "../dto/Productcard";


@Injectable({
  providedIn: 'root'
})


export class ProductService {


  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get<any>(environment.apiHost + '/product/findAll').pipe();
  }

  save(form:ProductCard): Observable<any> {

    const  body: any = {
      id : form.id,
      imgSrc : form.imgSrc,
      fileName : form.fileName,
      title : form.title,
      price : form.price,
      rprice : form.rprice
    }
    return this.httpClient.post<any>(environment.apiHost + '/product/save', body).pipe();
  }

  delete(id: string): Observable<any> {

    const formData = new FormData();
    formData.append('id', id);
    return this.httpClient.post<any>(environment.apiHost + '/product/delete', formData).pipe();
  }
}
