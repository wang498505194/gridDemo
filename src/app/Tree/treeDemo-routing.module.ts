import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeViewComponent } from '../../../node_modules/_@progress_kendo-angular-treeview@1.1.1@@progress/kendo-angular-treeview/dist/es/treeview.component';
import { TreeDemoComponent } from './treeDemo.component';
import { TreeViewCheckBoxesComponent } from './TreeViewDemo/treeViewCheckBoxes.component';
import { TreeViewDemoComponent } from './TreeViewDemo/treeViewDemo.component';
import { TreeViewFlatDataComponent } from './TreeViewDemo/treeViewFlatData-Source.component';
import { TreeViewHierychyComponent } from './TreeViewDemo/treeViewHierachy-Source.component';



const routes: Routes = [
  {
    path: '',
    component: TreeDemoComponent,
    children: [
      { path: '', redirectTo: 'TreeViewCheckBoxesComponent', pathMatch: 'full' },
      { path: 'TreeViewCheckBoxesComponent', component: TreeViewCheckBoxesComponent },
      { path: 'TreeViewDemoComponent', component: TreeViewDemoComponent },
      { path: 'TreeViewFlatDataComponent', component: TreeViewFlatDataComponent },
      { path: 'TreeViewHierychyComponent', component: TreeViewHierychyComponent },

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }

