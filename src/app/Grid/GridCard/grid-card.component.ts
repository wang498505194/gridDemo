
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
// import { ButtonGroupModule, ButtonsModule } from '@progress/kendo-angular-buttons';
import { ButtonModule, ButtonsModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';


import { GridCardService } from './service/grid-card.service';
import { sampleData } from './service/sampleData';


@Component({
	selector: 'grid-card',
	templateUrl: './grid-card.component.html'
})
export class GridCardComponent implements OnInit {

	// vm: any;
	//public view: Observable<GridDataResult>;
	view:any[];

	currentItem:any;
	
	public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
	};
	
	constructor(private service: GridCardService) {
	}

	ngOnInit() {
		// this.view = this.service.map(data => process(data, this.gridState));
		// this.service.loadData();
		// console.log(this.view);
		this.view=sampleData;
	}


	selectItem($event) {
		this.currentItem = $event;
		console.log(this.currentItem);
	}

	saveItem($event){
		console.log($event);
	}

	cancelItem(){
		
	}
}
