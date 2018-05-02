import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogModule,WindowModule } from '@progress/kendo-angular-dialog';
import { WindowDemoComponent } from './window/window.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { DialogRoutingModule } from './dialog-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule, ButtonsModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DialogdialogDemoComponent } from './dialogdialog-demo/dialogdialog-demo.component';
import { AngularServiceComponent } from './angular-service/angular-service.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { WindowDetailComponent } from './view-container/windowDetail.component';

@NgModule({
  imports: [
    CommonModule,
    DialogRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    GridModule,
    ButtonsModule,
    ButtonGroupModule,
    DialogModule,
    InputsModule,
    DropDownListModule,
    WindowModule
  ],
  declarations: [WindowDetailComponent,WindowDemoComponent, DialogDemoComponent, DialogdialogDemoComponent, AngularServiceComponent, ViewContainerComponent],

  entryComponents:[WindowDetailComponent]
})
export class DialogDemoModule { }
