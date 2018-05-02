import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { WindowDemoComponent } from './window/window.component';
import { DialogdialogDemoComponent } from './dialogdialog-demo/dialogdialog-demo.component';
import { AngularServiceComponent } from './angular-service/angular-service.component';
import { ViewContainerComponent } from './view-container/view-container.component';
// import { WindowDemoComponent } from '../../../node_modules/_@progress_kendo-angular-dialog@3.3.0@@progress/kendo-angular-dialog/dist/es2015/window/window.component';
const routes: Routes = [
  {
    path: '',
    component: DialogDemoComponent,
    children: [
      { path: 'Dialog', component: DialogdialogDemoComponent },
      { path: 'Window', component: WindowDemoComponent },
      { path: 'AngularServiceComponent', component: AngularServiceComponent },
      { path: 'ViewContainer', component: ViewContainerComponent },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogRoutingModule { }

