import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { DataSet, DataTable, DataRow, SelectRowChangedParam, AddNewRowParam } from './../../../../libs/datasource';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// const USERS_CONFIG = {
// 	primaryKey: 'ID',
// 	columns: [
// 		{ field: 'ID', datatype: 'number', defaultValue: '' },
// 		{ field: 'Code', datatype: 'string', defaultValue: 'admin' },
// 		{ field: 'Name', datatype: 'string' },
// 		{ field: 'IsMarried', datatype: 'boolean' },
// 		{ field: 'mobile', datatype: 'string' },
// 		{ field: 'trueName', datatype: 'string' },
// 		{ field: 'ender', datatype: 'string' },
// 		{ field: 'birthday', datatype: 'string' },
// 		{ field: 'remark', datatype: 'string' },
// 	]
// };


@Injectable()
export class GridCardService extends BehaviorSubject<any[]> {

	private data: any[] = [];

	constructor(private http: HttpClient) {
		super([]);
		const self = this;
	}


	loadData() {
		return this.http.get('assets/users.json').map(res => <any[]>res).subscribe(data=>this.data=data);
	}

}
