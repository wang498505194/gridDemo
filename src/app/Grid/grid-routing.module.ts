import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InCellEditComponent } from './InCell-Edit/InCell-Edit.component';
import { BuiltInSourceComponent } from './BuiltIn-Source/BuiltIn-Source.component';
import { HttpClientSourceComponent } from './HttpClient-Source/HttpClient-Source.component';
import { ExternalEditComponent } from './External-Edit/external-edit.component';
import { GridCardComponent } from './GridCard/grid-card.component';
import { DetailTemplateComponent } from './DetailTemplateDirective/DetailTemplate.Component';
import { GridDemoComponent } from './grid.component';


const routes: Routes = [
  {
    path: '',
    component: GridDemoComponent,
    children: [
      { path: '', redirectTo: 'InCell_Edit', pathMatch: 'full' },
      { path: 'InCell_Edit', component: InCellEditComponent },
      { path: 'BuitIn_Source', component: BuiltInSourceComponent },
      { path: 'HttpClient_Source', component: HttpClientSourceComponent },
      { path: 'External_Edit', component: ExternalEditComponent },
      { path: 'Grid_Card', component: GridCardComponent },
      { path: 'Detail_Template', component: DetailTemplateComponent },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }

