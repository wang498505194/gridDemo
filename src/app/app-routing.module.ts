import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropDownComponent } from './drop-down/drop-down.component';
import { DasSampleComponent } from './das-sample/das-sample.component';
import { BEGridComponent } from './be-designer/be-designer-grid/be-designer-grid.component';


const routes: Routes = [
  { path: '', redirectTo: 'Grid', pathMatch: 'full' },
  { path: 'Grid', loadChildren: './Grid/grid.module#GridDemoModule' },
  { path: 'Tree', loadChildren: './Tree/treeDemo.module#TreeDemoModule' },
  { path: 'LayOut', loadChildren: './LayOut/layout-demo.module#LayoutDemoModule' },
  { path: 'DropDown', component:DropDownComponent },

  { path:'dasSample',component:DasSampleComponent},
  { path: 'BEDesigner', component:BEGridComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

