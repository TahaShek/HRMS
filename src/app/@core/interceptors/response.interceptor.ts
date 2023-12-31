import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggingService } from '@core/logger';
import { AuthService } from '@services/auth';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private _logger: LoggingService,
                private _auth: AuthService,
                private _loader: NgxUiLoaderService){}

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        let ok: string;
        this._loader.start();
        return next.handle(req).pipe(
          tap({
            next: (event) =>
              (ok = event instanceof HttpResponse ? 'succeeded' : '')
          }),
          // tap((event: HttpEvent<any>) => {
          //   if (event instanceof HttpResponse && event.status === 200) {
          //     ok = 'succeeded';
          //     this._logger.info(event.body.code);
          //   }
          // }),
          catchError((error: HttpErrorResponse) => {
            ok = 'failed';
            this._loader.stop();
            if ([401, 403].includes(error.status)) {
              this._auth.logout();
              return throwError(() => error);
            } else if (error.status === 0) {
              this._logger.error('Server is not responding at the moment, please try again later!');
              return throwError(() => error);
            } else {
              // console.error(error);
              return throwError(() => error);
            }
          }),
          finalize(() => {
            this._loader.stop();
            const elapsed = Date.now() - started;
            const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
            console.log(msg);
          })
        );
    }
}
