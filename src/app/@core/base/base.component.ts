import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Global } from "@core/enum";
import { HttpService } from "@core/http";
import { LoggingService } from "@core/logger";
import { ConsoleService } from "@core/logger/console.service";
import { storage } from "@core/utils";

import { ToastrService } from "ngx-toastr";
import { ConfirmationService } from "primeng/api";
import { BehaviorSubject } from "rxjs";
​
@Injectable()
export abstract class BaseComponent {
​
  isLoggedIn$ = new BehaviorSubject<boolean>(!!storage.getItem(Global.StorageKey));
​
  data: any;
  isUpdate: boolean = false;
​
  protected _router = this.injector.get(Router);
  protected _http = this.injector.get(HttpService);
  protected _logger = this.injector.get(LoggingService);
  protected _toast = this.injector.get(ToastrService);
  protected _console = this.injector.get(ConsoleService);
  protected _confirmDialog = this.injector.get(ConfirmationService);
  // protected _controlContainer = this.injector.get(ControlContainer);
​
  constructor(protected injector: Injector) {
  }
​
  protected get isLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }
​
protected get CurrerntUserId(): any {
  const userItem = localStorage.getItem(Global.StorageKey);
  if (userItem) {
    return JSON.parse(userItem)?.user;
  }
  return null; // or some default value
}

protected get CurrentTenentId(): any {
  const tenentItem = localStorage.getItem(Global.StorageKey);
  if (tenentItem) {
    return JSON.parse(tenentItem).tenent;
  }
  return null; // or some default value
}

  protected get GetStorage() {
    return storage;
  }
​
  protected get TimeStamp(): number {
    return new Date().getTime();
  }

}