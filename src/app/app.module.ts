import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PopupModule } from '@progress/kendo-angular-popup';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutDemoModule } from './LayOut/layout-demo.module';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DasSampleComponent } from './das-sample/das-sample.component';
// import { BeDesignerModule } from './be-designer/be-designer.module';
import { BEGridComponent } from './be-designer/be-designer-grid/be-designer-grid.component';
import { begridEditService } from './be-designer/be-designer-grid/be-designer-grid.edit.service';
import { DialogDemoModule } from './dialog/dialog.module';
import { PopUpDemoComponent, CustomPopUpDetailComponent } from './pop-up/pop-up.component';
import { FormDemoComponent } from './form-demo-component/form-demo-component.component';
import { ClickMeComponent } from './form-demo-component/click-me.component';
import { ClickMe2Component } from './form-demo-component/click-me2.component';
import { KeyUpComponent_v1, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4 } from './form-demo-component/keyup.components';
import { LittleTourComponent } from './form-demo-component/little-tour.component';
import { LoopbackComponent } from './form-demo-component/loop-back.component';
import { HeroFormComponent } from './form-demo-component/hero-form/hero-form.component';
import { HeroListComponent } from './form-demo-component/hero-list/hero-list.component';
import { HeroDetailComponent } from './form-demo-component/hero-detail/hero-detail.component';
// import { FormDemoComponentComponent } from './form-demo-component/form-demo-component.component';



@NgModule({
    declarations: [
        AppComponent,
        DropDownComponent,
        DasSampleComponent,
        BEGridComponent,
        PopUpDemoComponent,
        CustomPopUpDetailComponent,
        FormDemoComponent,

        ClickMeComponent,
        ClickMe2Component,
        KeyUpComponent_v1,
        KeyUpComponent_v2,
        KeyUpComponent_v3,
        KeyUpComponent_v4,
        LittleTourComponent,
        LoopbackComponent,
        HeroFormComponent,
        HeroListComponent,
        HeroDetailComponent
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
        DialogModule,
        ReactiveFormsModule,
        TreeViewModule,
        InputsModule,
        DateInputsModule,
        ButtonModule,
        DropDownsModule,
        LayoutModule,
        DialogDemoModule,
        PopupModule
        // BeDesignerModule
    ],
    entryComponents: [CustomPopUpDetailComponent],
    providers: [
        begridEditService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

