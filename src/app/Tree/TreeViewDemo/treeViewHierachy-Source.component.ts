import { Component } from '@angular/core';
//import { SelectionSettings } from '@progress/kendo-angular-treeview';

@Component({
    selector: 'treeViewHierychy',
    templateUrl: './html/treeViewHierychy-Source.component.html',
})
export class TreeViewHierychyComponent {
    public expandedKeys: any[] = ["Storage"];//默认展开名称为“”的组，需要在html中添加[expandBy],[expandedKeys]
    public disabledKeys: any[] = ["0_2"];
    public selectedKeys: any[] = ["0_0"];

    //  public selection: SelectionSettings = { mode: 'multiple' };
    public treeNodes: any[] = [
        {
            categoryName: "Storage", subCategories: [
                { subCategoryName: "Wall Shelving" },
                { subCategoryName: "Floor Shelving" },
                { subCategoryName: "Kids Storage" }
            ]
        },
        {
            categoryName: "Lights", subCategories: [
                { subCategoryName: "Ceiling" },
                { subCategoryName: "Table" },
                { subCategoryName: "Floor" }
            ]
        }
    ];
}
