import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {AppSettings} from '../app-settings';

/*
  Generated class for the Attendance provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Attendance {

  constructor(public http: Http) {
    console.log('Hello Attendance Provider');
  }

  getAttendance(id: any, token: any, qrcode: any){
    let contentHeader = new Headers({"Content-Type": "application/json"});
    return this.http.post(AppSettings.API_ENDPOINT + '/api/attendances', { user_id: id, token: token, qrcode: qrcode })
            .map((response: Response) => {
              return response.json();
              // let data = response.json();
                //console.log("return :",user)
                //console.log("response :",response)


            });
  }

  getPermission(){

  }

}
