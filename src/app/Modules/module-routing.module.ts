import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydriveComponent } from './mydrive/mydrive.component';

const routes: Routes = [
    // {
    //   path:'',redirectTo:'mydrive',pathMatch:'full'
    // },
    // {
    //     path:'mydrive',component:MydriveComponent
    // }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuleRoutingModule { }
