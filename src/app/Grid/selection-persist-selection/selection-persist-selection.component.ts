import { Component } from '@angular/core';
// import { products } from './products';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { products } from '../../../assets/productsClass';

@Component({
    selector: 'app-selection-persist-selection',
    template: `
        <kendo-grid
            [data]="gridView"
            [pageSize]="pageSize"
            [skip]="skip"
            [pageable]="true"
            (pageChange)="pageChange($event)"
            [height]="500"
            kendoGridSelectBy
            [selectedKeys]="mySelection"
            >
            <kendo-grid-column field="ProductName" title="Product Name" [width]="300"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-column field="UnitsOnOrder" title="Units On Order"></kendo-grid-column>
            <kendo-grid-column field="ReorderLevel" title="Reorder Level"></kendo-grid-column>
        </kendo-grid>
    `
})
export class SelectionPersistSelectionComponent {
    public gridView: GridDataResult;
    public items: any[] = products;
    public mySelection: number[] = [0, 1];
    public pageSize = 10;
    public skip = 0;

    constructor() {
        this.loadItems();
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();

        // Optionally, clear the selection when paging
        // this.mySelection = [];
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
}

