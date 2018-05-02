import { Component, OnInit } from '@angular/core';
import { SelectableSettings, SelectableMode } from '@progress/kendo-angular-grid';
import { products } from '../../../assets/productsClass';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent{
    public gridData: any[] = products;

    public checkboxOnly = false;
    public mode:SelectableMode='single';
    // public mode:SelectableMode='single';
    public selectableSettings: SelectableSettings;

    constructor() {
        this.setSelectableSettings();
    }

    public setSelectableSettings(): void {
        this.selectableSettings = {
            checkboxOnly: this.checkboxOnly,
            mode: this.mode
        };
    }
}

