import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, Output, OnChanges, OnInit, EventEmitter } from '@angular/core';
@Component({
	selector: 'gridcard-card',
	templateUrl: './gridCard-card.component.html'
})
export class GridCardCardComponent implements OnChanges, OnInit {
	userform: FormGroup;
	@Input() dataItem: any = {};
	@Output() onSave = new EventEmitter();
	@Output() onCancel = new EventEmitter();

	ngOnChanges() {
	}

	ngOnInit() {
		this.initForm();
	}

	initForm() {
		this.userform = new FormGroup({
			Code: new FormControl(),
			Name: new FormControl(),
			Age:new FormControl(),
			IsMarried: new FormControl()
		});
	}


}
