import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home/home-base',
    pathMatch:'full'
  },
  {
    path:'home-base',
    component: HomeComponent,
    children: [
      {
        path:'',
        redirectTo:'/home/home-base/personal-info',
        pathMatch:'full'
      },
      {
        path:'personal-info',
        component: PersonalInfoComponent
      },
      {
        path:'skills',
        component: SkillsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
