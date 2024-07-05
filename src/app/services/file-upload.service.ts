import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  // API url
  baseApiUrl = 'https://file.io';

  constructor(private http: HttpClient) {}

  // Returns an observable
  // upload(file: any): Observable<any> {
  //   // Create form data
  //   const formData = new FormData();
  //
  //   // Store form name as "file" with file data
  //   formData.append('file', file, file.name);
  //
  //   // Make http post request over api
  //   // with formData as req
  //   return this.http.post(this.baseApiUrl, formData, {
  //     reportProgress: true,
  //     observe: 'events',
  //   });
  // }


  upload(file:any): Observable<any> {

    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('image', file);
    return this.http.post<any>(environment.apiHost + '/file/save', formData).pipe();
  }

  delete(fileName:any): Observable<any> {

    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('fileName', fileName);
    return this.http.get<any>(environment.apiHost + '/file/delete?fileName='+fileName).pipe();
  }

}
