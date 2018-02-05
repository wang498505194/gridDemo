
import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
	selector: 'gridcard-grid',
	templateUrl: './gridCard-grid.component.html'
})
export class GridCardGridComponent {
	@Input() gridData: any[];
	@Output() onAdd = new EventEmitter();
	@Output() onDel = new EventEmitter();
	@Output() onSaveAll = new EventEmitter();
	@Output() onCancelAll = new EventEmitter();
	@Output() onSelect =new EventEmitter();

	onSelectChange({selectedRows}){
		this.onSelect.emit(selectedRows[0].dataItem);
	}

}
