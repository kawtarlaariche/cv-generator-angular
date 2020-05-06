import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'user-dashboard', pathMatch: 'prefix'},
  { 
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
  }, 
  { 
    path: 'user-dashboard',
    loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule) 
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
