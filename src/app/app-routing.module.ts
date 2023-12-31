import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './theme/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    // canLoad: [UnAuthorizationGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    // canLoad: [AuthorizedGuard],
    children: [
      {
        path:'dummy',
        loadChildren: () =>
        import('./modules/dummy/dummy.module').then((m) => m.DummyModule),
        
      }
    ],
  },

];

const _config: ExtraOptions = {
  useHash: false,
  initialNavigation: 'enabledNonBlocking',
  
};

@NgModule({
  imports: [RouterModule.forRoot(routes,_config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}