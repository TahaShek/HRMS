import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from "@angular/core";
import { Router } from '@angular/router';
import { Global } from '@core/enum';
import { LoggingService } from '@core/logger';
// import { LoggingService } from "@core/logger/logging.service";
import { storage } from '@core/utils';
import { Observable, Subject } from 'rxjs';
​
interface Response extends Object {
  code: number;
  data: any[];
  message: string;
}
​
@Injectable({
  providedIn: 'root'
})
​
export class HttpService implements OnDestroy
{
  destroy$: Subject<boolean> = new Subject<boolean>();
​
  constructor(private http: HttpClient,
              private router: Router,
              private logger: LoggingService){}
​
  PostByPromise(endPoint: string, body: any, options={}): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.post(endPoint, body, options).subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err);
        },
      })
    });
    return promise;
  }
​
  PutByPromise(endPoint: string, body: any, options={}): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.put(endPoint, body, options).subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err);
        },
      })
    });
    return promise;
  }
​
  GetByPromise(endPoint: string, options={}): Promise<any> {
    let promise = new Promise<any>((resolve, reject) => {
      this.http.get(endPoint, options).subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err);
        },
      })
    });
    return promise;
  }

  PostByObservable(endPoint: string, body: any, options={}): Observable<any> {
    return this.http.post(endPoint, body, options);
  }

  GetByObservable(endPoint: string, options={}): Observable<any> {
    return this.http.get(endPoint, options);
  }

  PutByObservable(endPoint: string, body: any, options={}): Observable<any> {
    return this.http.put(endPoint, body, options);
  }

  DeleteByObservable(endPoint: string, options={}): Observable<any> {
    return this.http.delete(endPoint, options);
  }
​
  private handleResponse(res: any): Response {
    if (res.status === 200)
    {
      this.logger.error(res.body.message +'\n'+ res.body.data);
      switch (res.body.code) {
        case 1000: // Success
          return res.body;
        default:
          return null;
      }
    }
    else
    {
      this.logger.error(res.status);
      return null;
    }
  }
​
  private handleError(error: HttpErrorResponse): void {
    if (error.status === 0) {
      this.logger.error('Server is not responding, please contact administrator!');
    } else {
      if (error.status === 404)
      {
        this.logger.error('Unauthorized User...');
        storage.removeItem(Global.StorageKey);
        this.router.navigateByUrl('/auth/login');
      } else {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Name: ${error.name}\nMessage: ${error.message}`;
        }
        this.logger.error(errorMessage);
      }
    }
  }
​
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}