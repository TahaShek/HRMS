import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsoleService {

  print(message: any, stackTrace?: string): void {
    // The console log should be replaced by your logging backend
    if (environment.debugLog == true)
    {
      console.log(
        'Logging service:',
        `\nMessage: ${message}`,
        `\nStack: ${stackTrace}`
      );
    }
  }
}
