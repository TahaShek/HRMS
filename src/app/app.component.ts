import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '@services/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // [x: string]: any;
  isLoggedIn$!: Observable<boolean>;
  isLoggedIn!: boolean;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private cd: ChangeDetectorRef,
    private _activatedRoute: ActivatedRoute,
    private _titleService: Title
  ) {}
  ngOnInit(): void {
    this.isLoggedIn$ = this._authService.isLoggedIn$;

  }
}