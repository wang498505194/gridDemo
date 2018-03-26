import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Product } from './model';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { begridEditService } from './be-designer-grid.edit.service';


const dataItem_wjjOnly="这是wjj家dog";

@Component({
  selector:'be-Grid',
  templateUrl:'./be-designer-grid.component.html',
})
export class BEGridComponent implements OnInit {

    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10,
    };

    public changes: any = {};

    // private editService: InCellEditService;
    private editedRowIndex: number;
    private editedProduct: Product;

    constructor(private formBuilder: FormBuilder, public editService: begridEditService) {
        debugger;
    }

    public ngOnInit(): void {
         this.view = this.editService.pipe(map(data => process(data, this.gridState)));
        debugger;
        //this.view = this.editService.map(data => process(data, this.gridState));
        this.editService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.editService.read();
    }

    public cellClickHandler({ sender, rowIndex, columnIndex, dataItem, isEdited }) {
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
        }
    }

    public cellCloseHandler(args: any) {
        const { formGroup, dataItem } = args;

        if (!formGroup.valid) {
             // prevent closing the edited cell if there are invalid values.
            args.preventDefault();
        } else if (formGroup.dirty) {
            this.editService.assignValues(dataItem, formGroup.value);
            this.editService.update(dataItem);
        }
    }

    
    public addHandler({ sender }) {
        sender.addRow(this.createFormGroup(new Product()));
    }

    public cancelHandler({ sender, rowIndex }) {
        sender.closeRow(rowIndex);
    }

    public saveHandler({ sender, formGroup, rowIndex }) {
        if (formGroup.valid) {
            this.editService.create(formGroup.value);
            sender.closeRow(rowIndex);
        }
    }

    public removeHandler({ sender, dataItem }) {
        this.editService.remove(dataItem);

        sender.cancelCell();
    }

    public saveChanges(grid: any): void {
        grid.closeCell();
        grid.cancelCell();

        this.editService.saveChanges();
    }

    public cancelChanges(grid: any): void {
        grid.cancelCell();

        this.editService.cancelChanges();
    }

    public createFormGroup(dataItem: any): FormGroup {
        return this.formBuilder.group({
            'ProductID': dataItem.ProductID,
            'ProductName': [dataItem.ProductName, Validators.required],
            'UnitPrice': dataItem.UnitPrice,
            'UnitsInStock': [dataItem.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])],
            'Discontinued': dataItem.Discontinued
        });
    }
}
