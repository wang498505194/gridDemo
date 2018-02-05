import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutDemosComponent } from './layout-demos.component';
import { SplitterDemoComponent } from './Splitter/splitter-demo.component';
import { LayoutDemoComponent } from './LayOutDemo/layout-demo.component';

const routes: Routes = [
  {
    path: '', 
    component:LayoutDemosComponent,
    children:[
      { path: '', redirectTo: 'Splitter', pathMatch: 'full' },
       { path: 'LayOut', component: LayoutDemoComponent },  
      { path: 'Splitter', component: SplitterDemoComponent },  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

