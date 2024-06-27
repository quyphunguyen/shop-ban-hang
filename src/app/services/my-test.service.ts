import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})


export class MyTestService {


  constructor(private httpClient: HttpClient) {}

  getPosts(): Promise<Object | undefined> {
    const url = `${environment.apiHost}/list`;
    return this.httpClient.get(url).toPromise();


  }

//   getPosts (): Observable<any> {
//     return this.httpClient.get<any>('http://localhost:8080/api/list')
//       .pipe(
//         tap(categories => console.log(`123`)),
//       catchError(async (categories1) => console.log(`1234`))
//     );
// }



}
