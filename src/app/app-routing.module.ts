import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'Grid', pathMatch: 'full' },
   { path: 'Grid',  loadChildren:'./Grid/grid.module#GridDemoModule'},
   { path: 'Tree',  loadChildren:'./Tree/treeDemo.module#TreeDemoModule'},
   { path: 'LayOut',  loadChildren:'./LayOut/layout-demo.module#LayoutDemoModule'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

