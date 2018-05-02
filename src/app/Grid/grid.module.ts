
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonModule, ButtonsModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';

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
import { BuiltInEditComponent } from './built-in-edit/built-in-edit.component';
import { CustomEditingInReactiveFormsComponent } from './custom-editing-in-reactive-forms/custom-editing-in-reactive-forms.component';
import { ProductsService } from './custom-editing-in-reactive-forms/product.service';
import { CustomItemTemplateDirective } from '../../../node_modules/_@progress_kendo-angular-dropdowns@1.6.1@@progress/kendo-angular-dropdowns/dist/es/templates/custom-item-template.directive';
import { PopupModule } from '@progress/kendo-angular-popup';
import { PopupAnchorDirective } from './custom-editing-in-reactive-forms/popup.anchor-target.directive';
import { SelectionComponent } from './selection/selection.component';
import { SelectionSelectAllComponent } from './selection-select-all/selection-select-all.component';
import { SelectionPersistSelectionComponent } from './selection-persist-selection/selection-persist-selection.component';
import { SelectionStoreByCustomKeyComponent } from './selection-store-by-custom-key/selection-store-by-custom-key.component';


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
        DetailTemplateComponent,
        BuiltInEditComponent,
        CustomEditingInReactiveFormsComponent,
        PopupAnchorDirective,
        SelectionComponent,
        SelectionSelectAllComponent,
        SelectionPersistSelectionComponent,
        SelectionStoreByCustomKeyComponent
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
        DialogModule,
        ReactiveFormsModule,
        InputsModule,
        DropDownListModule,
        PopupModule,
        ReactiveFormsModule,

    ],
    providers: [
        {
            deps: [HttpClient],
            provide: EditService,
            useFactory: (httpClient: HttpClient) => () => new EditService(httpClient)
        },
        {
            deps: [HttpClient],
            provide: ExternalEditService,
            useFactory: (httpClient: HttpClient) => () => new ExternalEditService(httpClient)
        },
        // {
        //     deps: [HttpClient],
        //     provide: InCellEditService,
        //     useFactory: (jsonp: HttpClient) => () => new InCellEditService(jsonp)
        // },
        {
            deps: [HttpClient],
            provide: HttpClientSourceService,
            useFactory: (httpClient: HttpClient) => () => new HttpClientSourceService(httpClient)
        },
        GridCardService,
        InCellEditService,
        ProductsService
    ],
    // bootstrap: [AppComponent]
})
export class GridDemoModule { }

