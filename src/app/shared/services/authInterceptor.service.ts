import {Injectable} from "@angular/core";
import { Observable } from 'rxjs';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";

import {PersistanceService} from "./persistance.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private persistanceService: PersistanceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistanceService.get('accessToken');
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    });
    return next.handle(req);
  }
}
