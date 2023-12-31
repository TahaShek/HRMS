import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from '@core/enum';
import { HttpService } from '@core/http';
import { storage } from '@core/utils/storage/storage.utils';
// import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn$ = new BehaviorSubject<boolean>(!!storage.getItem(Global.StorageKey));

  constructor(private http: HttpService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  login(): void {
    this.isLoggedIn$.next(true);
  }

  logout(): void {
    storage.removeItem(Global.StorageKey);
    this.isLoggedIn$.next(false);
  }

  SendLoginRequest(req: any): void {
    this.http.PostByPromise('tokens', req).then(res => {
      if (res) {
        storage.setItem(Global.StorageKey, {
          token: res.token,
          refreshToken: res.refreshToken,
          refreshTokenExpiryTime: res.refreshTokenExpiryTime,
          user: res.userId,
          tenent: res.tenentId
        })
      }
    }).then(() => {
      this.isLoggedIn$.next(true);
      // this.router.navigate(['module', 'shared', 'accounts']);
    }).catch(err => {
      // this.toastr.error(err.error.messages[0]);
    });
  }

  logoutUser(){
    storage.removeItem(Global.StorageKey);
  }
}
