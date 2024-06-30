import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../environments/environment";
import {from, Observable} from "rxjs";
import {UserDTO} from "../dto/UserDTO";


@Injectable({
  providedIn: 'root'
})


export class UserService {


  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    return this.httpClient.get<any>(environment.apiHost + '/list').pipe();
  }

  getUser(user:any): Observable<any> {
    const  body: any = {
      userName : user.userName,
      userPassword : user.userPassword
    }
    return this.httpClient.post<any>(environment.apiHost + '/user/getById',{userName : user.userName,
      userPassword : user.userPassword}).pipe();
  }
  saveUser(form:any): Observable<any> {
    const  body = {
      userName : form.userName,
      email: form.email,
      userPassword : form.userPassword
    }
    return this.httpClient.post<any>(environment.apiHost + '/user/save', body).pipe();
  }
}
