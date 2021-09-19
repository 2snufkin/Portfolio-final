import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Mail} from './interfaces/Mail';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private mailApi = 'https://mailthis.to/dev.pinhas@gmail.com';

  constructor(private http: HttpClient) {
  }

  postEmail(email: Mail): any {
    console.log("hi");
    return this.http.post(this.mailApi, email, {responseType: 'text'});
    // .pipe(
    //   map(
    //     (response) => {
    //       if (response) {
    //         console.log(response);
    //         return response;
    //       } else {
    //         return null;
    //       }
    //     },
    //     (error: any) => {
    //       return error;
    //     }
    //   )
    // );
  }

}
