import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InCellEditComponent } from './InCell-Edit/InCell-Edit.component';
import { BuiltInSourceComponent } from './BuiltIn-Source/BuiltIn-Source.component';
import { HttpClientSourceComponent } from './HttpClient-Source/HttpClient-Source.component';
import { ExternalEditComponent } from './External-Edit/external-edit.component';
import { GridCardComponent } from './GridCard/grid-card.component';
import { DetailTemplateComponent } from './DetailTemplateDirective/DetailTemplate.Component';
import { GridDemoComponent } from './grid.component';
import { BuiltInEditComponent } from './built-in-edit/built-in-edit.component';
import { CustomEditingInReactiveFormsComponent } from './custom-editing-in-reactive-forms/custom-editing-in-reactive-forms.component';


const routes: Routes = [
  {
    path: '',
    component: GridDemoComponent,
    children: [
      { path: '', redirectTo: 'InCell_Edit', pathMatch: 'full' },
      { path: 'InCell_Edit', component: InCellEditComponent },
      { path: 'BuiltIn_Edit', component: BuiltInEditComponent },
      { path: 'BuitIn_Source', component: BuiltInSourceComponent },
      { path: 'HttpClient_Source', component: HttpClientSourceComponent },
      { path: 'External_Edit', component: ExternalEditComponent },
      { path: 'Grid_Card', component: GridCardComponent },
      { path: 'Detail_Template', component: DetailTemplateComponent },
      { path: 'Custom_Editing', component: CustomEditingInReactiveFormsComponent },
      
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }

