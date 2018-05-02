
import { NgModule } from '@angular/core';

import { SplitterModule, LayoutModule } from '@progress/kendo-angular-layout';

import { LayoutRoutingModule } from './layout-demo-routing.module';
import { SplitterDemoComponent } from './Splitter/splitter-demo.component';
import { LayoutDemosComponent } from './layout-demos.component';
import { LayoutDemoComponent } from './LayOutDemo/layout-demo.component';
// import { CommonModule } from '../../../node_modules/_@angular_common@5.2.3@@angular/common/src/common_module';

@NgModule({
    declarations: [
        LayoutDemosComponent,
        LayoutDemoComponent,
        SplitterDemoComponent
    ],
    imports: [
        // CommonModule,

        // SplitterModule,

        LayoutModule,
        LayoutRoutingModule
    ],
})
export class LayoutDemoModule { }

