import { Component } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
    selector: 'treeViewCheckBoxes',
    templateUrl:'./html/treeViewCheckBoxes.component.html',
})
export class TreeViewCheckBoxesComponent {
    public checkedKeys: any[] = ["1"];

    public checkChildren: boolean = true;
    public checkParents: boolean = true;
    public checkMode: any = 'multiple';
    public selectionMode: any = 'single';

    public get checkableSettings(): CheckableSettings {
        return {
            checkChildren: this.checkChildren,
            checkParents: this.checkParents,
            mode: this.checkMode
        };
    }

    public data: any[] = [
        {
          text: "Furniture", items: [
            { text: "Tables & Chairs" },
            { text: "Sofas" },
            {
              text: "Occasional Furniture", items: [{
                text: "Decor", items: [
                  { text: "Bed Linen" },
                  { text: "Curtains & Blinds" }
                ]
              }]
            }
          ]
        },
        { text: "Decor" },
        { text: "Outdoors" }
    ];

    public children = (dataItem: any):any=> Observable.of(dataItem.items);
    // public children = (dataItem: any): any[] => Observable.of(dataItem.items);
    public hasChildren = (dataItem: any): boolean => !!dataItem.items;
}
