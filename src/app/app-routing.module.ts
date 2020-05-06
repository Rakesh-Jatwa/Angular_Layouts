import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DashboardComponent } from './panel/dashboard/dashboard.component';
import { MydriveComponent } from './Modules/mydrive/mydrive.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
   
  {
       path: 'module',
       loadChildren: () => import('./Modules/module.module').then(m => m.ModuleModule),
 },

  // panels routing here
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
      path:'',component:MydriveComponent  
      },
    //  {
      //  path: 'module',
      //  loadChildren: () => import('./Modules/module.module').then(m => m.ModuleModule),
        // children: [
        //   {path:'',redirectTo:'mydrive',pathMatch:'full'},
        //   {path:'mydrive',component:MydriveComponent}
        // ]

    //  }
    ]
  },
  // {
  // path:'dashboard',
  //   loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
