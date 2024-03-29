import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import {AuthResponseInterface} from "../types/authResponse.interface";
import { environment } from "../../../environments/environment";
import {LoginRequestInterface} from "../types/loginRequest.interface";



@Injectable()

export class AuthService {
  constructor(
    private http: HttpClient
  ) {}

  getUser = (response: AuthResponseInterface): CurrentUserInterface =>  response.user;

  // Запрос для регистрации
  register = (data: RegisterRequestInterface): Observable<CurrentUserInterface> => {
    const url = `${environment.apiUrl}users`;
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      map(this.getUser)
    );
  }

  // Запрос для
  login = (data: LoginRequestInterface): Observable<CurrentUserInterface> => {
    const url = `${environment.apiUrl}users/login`;
    return this.http.post<AuthResponseInterface>(url, data).pipe(
      map(this.getUser)
    );
  }

  getCurrentUser = (): Observable<CurrentUserInterface> => {
    const url = `${environment.apiUrl}user`;
    return  this.http.get(url).pipe(
      map(this.getUser)
    );
  }
}
