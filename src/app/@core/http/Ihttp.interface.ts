import { Observable } from "rxjs";

export interface IHttpService
{
  post(endPoint: string, body: any, options: any): Observable<any>;
  get(endPoint: string, options: any): Observable<any>;
  put(endPoint: string, body:any, options: any): Observable<any>;
  delete(endPoint: string, options: any): Observable<any>
}
