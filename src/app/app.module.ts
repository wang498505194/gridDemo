import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule,ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutDemoModule } from './LayOut/layout-demo.module';
import { DoDesignerComponent } from './do-designer/do-designer.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DasSampleComponent } from './das-sample/das-sample.component';



@NgModule({
    declarations: [
        AppComponent,
        DoDesignerComponent,
        DropDownComponent,
        DasSampleComponent,
        
    ],
    imports: [
        
        CommonModule,
        HttpClientModule,
        HttpClientJsonpModule,
        BrowserModule,
        BrowserAnimationsModule,

        FormsModule,
        GridModule,
        AppRoutingModule,
        ButtonsModule,
        ButtonGroupModule,
        DialogModule ,
        ReactiveFormsModule,
        TreeViewModule,
        InputsModule,
		DateInputsModule,
        ButtonModule,
        DropDownsModule,
        LayoutModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

