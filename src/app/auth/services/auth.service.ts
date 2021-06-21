import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {CurrentUserInterface} from "../../shared/types/currentUser.interface";
import { environment } from "../../../environments/environment";


@Injectable()

export class AuthService {
  constructor(
    private http: HttpClient
  ) {
  }
  register = (data: RegisterRequestInterface): Observable<CurrentUserInterface> => {
    const url = `${environment}users`;

    return this.http.post(url, data)

  }
}
