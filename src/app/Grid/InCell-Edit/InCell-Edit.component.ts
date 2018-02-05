import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Product } from './model';
import { InCellEditService } from './InCell-Edit.edit.service';

const dataItem_wjjOnly="这是wjj家dog";

@Component({
  selector:'Grid-InCell-Edit',
  templateUrl:'./InCell-Edit.component.html',
})
export class InCellEditComponent implements OnInit {
    removeConfirmationSubject:  Subject<boolean> = new Subject<boolean>();
    itemToRemove: any;
    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

    private editService: InCellEditService;
    private editedRowIndex: number;
    private editedProduct: Product;

    constructor(@Inject(InCellEditService) editServiceFactory: any) {
        this.editService = editServiceFactory();
        this.removeConfirmation = this.removeConfirmation.bind(this);
    }

    public ngOnInit(): void {
        this.view = this.editService.map(data => process(data, this.gridState));

        this.editService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.editService.read();
    }

    public addHandler({sender}) {
        // this.closeEditor(sender);

        // sender.addRow(new Product());
    }

    public editHandler({sender, columnIndex,rowIndex, dataItem,column,isNew}) {
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedProduct = Object.assign({}, dataItem);

        sender.editRow(rowIndex);
        //以下用来测试CommandColumnComponent
        console.log("\n行列索引： ",rowIndex,columnIndex);
        console.log("\n行列数据： ",dataItem,column);
        console.log("\nisNew： ",isNew);
    }

    public cancelHandler({sender, rowIndex}) {
        this.closeEditor(sender, rowIndex);
    }

    public saveHandler({sender, rowIndex, dataItem, isNew}) {
        this.editService.save(dataItem, isNew);

        sender.closeRow(rowIndex);

        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    }

    public removeHandler({dataItem}) {
        this.editService.remove(dataItem);
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editService.resetItem(this.editedProduct);
        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    }

    private CustomClick()
    {
        console.log("自定义按钮被点击了！");
    }
    public confirmRemove(shouldRemove: boolean): void {
        this.removeConfirmationSubject.next(shouldRemove);

        this.itemToRemove = null;
    }
    public removeConfirmation(dataItem): Subject<boolean> {
        this.itemToRemove = dataItem;

        return this.removeConfirmationSubject;
    }
}
