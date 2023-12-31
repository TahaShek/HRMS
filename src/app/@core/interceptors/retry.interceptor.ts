import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { mergeMap, retryWhen, tap } from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  retryDelay = 1000;
  retryMaxAttempts = 1;
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        this.retryAfterDelay(),
      );
  }

  retryAfterDelay(): any {
    return retryWhen(errors => {
      return errors.pipe(
        mergeMap((err, count) => {
          // throw error when we've retried ${retryMaxAttempts} number of times and still get an error
          if (count === this.retryMaxAttempts) {
            return throwError(err);
          }
          return of(err).pipe(
            tap(error => console.log(`Retrying ${error.url}. Retry count ${count + 1}`)),
            mergeMap(() => timer(this.retryDelay))
          );
        })
      );
    });
  }
}
