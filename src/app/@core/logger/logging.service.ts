import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {

  constructor(){}

  error(message: any, stackTrace?: string): void {
    // The console log should be replaced by your logging backend
    // if (environment.debugLog == true)
    // {
    //   console.log(
    //     'Logging service:',
    //     `\nMessage: ${message}`,
    //     `\nStack: ${stackTrace}`
    //   );
    // }
    if (environment.errorToasts == true) {
      // this.toast.error(message);
    }
  }

  info(message: any): void {
    // this.toast.info(message);
  }
}
