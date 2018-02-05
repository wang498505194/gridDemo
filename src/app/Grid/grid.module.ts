
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule, ButtonsModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { EditService } from './edit.service';
import { InCellEditComponent } from './InCell-Edit/InCell-Edit.component';
import { InCellEditService } from './InCell-Edit/InCell-Edit.edit.service';

import { BuiltInSourceComponent } from './BuiltIn-Source/BuiltIn-Source.component';
import { HttpClientSourceComponent } from './HttpClient-Source/HttpClient-Source.component';
import { HttpClientSourceService } from './HttpClient-Source/HttpClient-Source.service';
import { ExternalEditService } from './External-Edit/external-edit.service';
import { ExternalEditComponent } from './External-Edit/external-edit.component';
import { GridEditFormComponent } from './External-Edit/external-edit-form.component';
import { GridCardService } from './GridCard/service/grid-card.service';
import { GridCardComponent } from './GridCard/grid-card.component';
import { GridCardCardComponent } from './GridCard/card/gridCard-card.component';
import { GridCardGridComponent } from './GridCard/grid/gridCard-grid.component';
import { DetailTemplateComponent } from './DetailTemplateDirective/DetailTemplate.Component';
import { GridRoutingModule } from './grid-routing.module';
import { GridDemoComponent } from './grid.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        GridDemoComponent,
        InCellEditComponent,
        ExternalEditComponent,
        BuiltInSourceComponent,
        HttpClientSourceComponent,
        GridEditFormComponent,
        GridCardComponent,
        GridCardCardComponent,
        GridCardGridComponent,
        DetailTemplateComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        HttpClientJsonpModule,

         FormsModule,
         GridModule,
         GridRoutingModule,
         ButtonsModule,
         ButtonGroupModule,
         DialogModule ,
         ReactiveFormsModule,
         InputsModule,
    ],
    providers: [
        {
            deps: [HttpClient],
            provide: EditService,
            useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
        },
        {
            deps: [HttpClient],
            provide: ExternalEditService,
            useFactory: (jsonp: HttpClient) => () => new ExternalEditService(jsonp)
        },
        {
            deps: [HttpClient],
            provide: InCellEditService,
            useFactory: (jsonp: HttpClient) => () => new InCellEditService(jsonp)
        },
        {
            deps: [HttpClient],
            provide: HttpClientSourceService,
            useFactory: (jsonp: HttpClient) => () => new HttpClientSourceService(jsonp)
        },
        GridCardService,
    ],
    // bootstrap: [AppComponent]
})
export class GridDemoModule {}

