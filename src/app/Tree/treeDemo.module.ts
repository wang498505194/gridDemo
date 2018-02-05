
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule, ButtonsModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { CommonModule } from '@angular/common';
import { TreeRoutingModule } from './treeDemo-routing.module';

import { TreeViewCheckBoxesComponent } from './TreeViewDemo/treeViewCheckBoxes.component';
import { TreeViewDemoComponent } from './TreeViewDemo/treeViewDemo.component';
import { TreeViewFlatDataComponent } from './TreeViewDemo/treeViewFlatData-Source.component';
import { TreeViewHierychyComponent } from './TreeViewDemo/treeViewHierachy-Source.component';
import { TreeDemoComponent } from './treeDemo.component';


@NgModule({
    declarations: [
        TreeViewCheckBoxesComponent,
        TreeViewDemoComponent,
        TreeViewFlatDataComponent,
        TreeViewHierychyComponent,
        TreeDemoComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        HttpClientJsonpModule,
        FormsModule,
        GridModule,
        ButtonsModule,
        ButtonGroupModule,
        DialogModule ,
        ReactiveFormsModule,
        TreeViewModule,
        InputsModule,
		DateInputsModule,
        ButtonModule,
        DropDownsModule,

        TreeRoutingModule
    ],
})
export class TreeDemoModule {}

