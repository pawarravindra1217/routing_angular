import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'services',
    component: ServicesComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
