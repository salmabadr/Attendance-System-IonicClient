import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {JwtHelper} from "angular2-jwt";
import {AppSettings} from '../app-settings';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http, private storage:Storage) {
    console.log('Hello AuthService Provider');
  }

  login(username: string, password: string){
    let contentHeader = new Headers({"Content-Type": "application/json"});
    return this.http.post(AppSettings.API_ENDPOINT + '/api/token-authentication', { username: username, password: password })
            .map((response: Response) => {
                console.log("response :",response)
                this.storage.set('token', response);

            });
  }

}
