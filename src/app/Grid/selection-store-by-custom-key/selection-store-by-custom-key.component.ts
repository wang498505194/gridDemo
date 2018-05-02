import { Component } from '@angular/core';
// import { products } from './products';
import { RowArgs, GridDataResult, PageChangeEvent, SelectAllCheckboxState } from '@progress/kendo-angular-grid';
import { products } from '../../../assets/productsClass';
// import { products } from '../custom-editing-in-reactive-forms/product';

@Component({
    selector: 'app-selection-store-by-custom-key',
    template: `
        <kendo-grid
            [data]="gridView"
            [pageSize]="pageSize"
            [skip]="skip"
            [pageable]="true"
            [height]="500"
            (pageChange)="pageChange($event)"
            [kendoGridSelectBy]="'ProductID'"
            [selectedKeys]="mySelection"
            (selectionChange)="selectionChange($event)"
            [selectable]="true"
            >
            <kendo-grid-checkbox-column >
            <ng-template kendoGridHeaderTemplate>
                    <input class="k-checkbox" id="selectAllCheckboxId" kendoGridSelectAllCheckbox
                        [state]="selectAllState"
                        (selectAllChange)="onSelectAllChange($event)">
                    <label class="k-checkbox-label" for="selectAllCheckboxId"></label>
                </ng-template>
            
            </kendo-grid-checkbox-column>
            <kendo-grid-column field="ProductName" title="Product Name" [width]="300"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-column field="UnitsOnOrder" title="Units On Order"></kendo-grid-column>
            <kendo-grid-column field="ReorderLevel" title="Reorder Level"></kendo-grid-column>
        </kendo-grid>
    `
})
export class SelectionStoreByCustomKeyComponent {
    public gridView: GridDataResult;
    public items: any[] = products;
    public pageSize = 10;
    public skip = 0;
    public selectAllState: SelectAllCheckboxState = 'unchecked';

    public mySelection: string[] = [];
    public mySelectionKey(context: RowArgs): string {
        return context.dataItem.ProductName + ' ' + context.index;
    }

    constructor() {
        this.loadItems();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
    
    public onSelectAllChange(checkedState: SelectAllCheckboxState) {
        if (checkedState === 'checked') {
            this.mySelection = this.items.map((item) => item.ProductID);
            this.selectAllState = 'checked';
        } else {
            this.mySelection = [];
            this.selectAllState = 'unchecked';
        }
    }

    public mySelectionIsRowSelected: any[] = [1, 2,3, 5];
    // public isRowSelected = (e: RowArgs) => this.mySelectionIsRowSelected.indexOf(e.dataItem.ProductID) >= 0;

    public selectionChange(e:any){console.log(e)}
}

