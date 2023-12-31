import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { storage } from '@core/utils/storage/storage.utils';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const token = storage.getItem('belsio/session')?.token;
    const isLoggedIn = token != null ? true :false;

    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          'Tenant': environment.defaultTenant,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
    } else
    {
      request = request.clone({
        setHeaders: {
          'Tenant': environment.defaultTenant,
          'Content-Type': 'application/json'
        },
      });
    }
    return next.handle(request);
  }
}
