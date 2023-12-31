import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptor } from './cache.interceptor';
import { JwtInterceptor } from './jwt.interceptor';
import { ResponseInterceptor } from './response.interceptor';
import { RetryInterceptor } from './retry.interceptor';
import { UrlInterceptor } from './url.interceptor';

export const InterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
];
