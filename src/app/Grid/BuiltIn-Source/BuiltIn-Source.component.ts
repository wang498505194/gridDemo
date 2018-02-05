
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { sampleData } from './sampleData';

@Component({
	selector: 'BuiltIn-Source',
	 templateUrl: './BuiltIn-Source.component.html'
})
export class BuiltInSourceComponent {
	public gridData:any[]=sampleData;
}