import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoDesignerComponent } from './do-designer/do-designer.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DasSampleComponent } from './das-sample/das-sample.component';


const routes: Routes = [
  { path: '', redirectTo: 'Grid', pathMatch: 'full' },
  { path: 'Grid', loadChildren: './Grid/grid.module#GridDemoModule' },
  { path: 'Tree', loadChildren: './Tree/treeDemo.module#TreeDemoModule' },
  { path: 'LayOut', loadChildren: './LayOut/layout-demo.module#LayoutDemoModule' },
  { path: 'DropDown', component:DropDownComponent },
  { path: 'DODesigner', component: DoDesignerComponent },
  { path:'dasSample',component:DasSampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

