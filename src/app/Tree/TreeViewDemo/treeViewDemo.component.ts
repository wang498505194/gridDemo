import { Component } from '@angular/core';
@Component({
    selector: 'treeViewDemo',
    template: `
    <kendo-treeview
        [nodes]="data"
        textField="text"
        kendoTreeViewExpandable
        kendoTreeViewSelectable
        kendoTreeViewHierarchyBinding
        childrenField="items"
    >
    </kendo-treeview>
  `
})
export class TreeViewDemoComponent {
    public data: any[] = [
        {
            text: "Furniture", items: [
                { text: "Tables & Chairs" ,items:[
                    {text:"01"},
                    {text:"02"},
                ]},
                { text: "Sofas" },
                { text: "Occasional Furniture" }
            ]
        },
        {
            text: "Decor", items: [
                { text: "Bed Linen" },
                { text: "Curtains & Blinds" },
                { text: "Carpets" }
            ]
        }
    ];
}
