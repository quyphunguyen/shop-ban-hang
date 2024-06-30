import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class MyTestService {


  constructor(private httpClient: HttpClient) {}

  // getPosts(): Observable<any> {
  //   return this.httpClient.get<any>(environment.apiHost + '/list').pipe();
  // }
  //
  // getUser(user:any): Observable<any> {
  //   const  body: any = {
  //     userName : user.userName,
  //     userPassword : user.userPassword
  //   }
  //   return this.httpClient.post<any>(environment.apiHost + '/user/getById',{userName : user.userName,
  //     userPassword : user.userPassword}).pipe();
  // }
  // saveUser(user: UserDTO, header: HttpHeaders): Observable<any> {
  //   return this.http.post<any>(environment.apiUrl + ADMIN + '/save-user', user, {headers: header}).pipe();
  // }
}
