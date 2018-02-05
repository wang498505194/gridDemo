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



@NgModule({
    declarations: [
        AppComponent,
        
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

        // LayoutDemoModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

