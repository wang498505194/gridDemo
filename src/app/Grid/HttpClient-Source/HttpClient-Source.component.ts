import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { ButtonModule, ButtonsModule, ButtonGroupModule } from '@progress/kendo-angular-buttons';


import { HttpClientSourceService } from './HttpClient-Source.service';
import { Product } from './productModel';

@Component({
    selector: 'HttpClient-Source',
    templateUrl: './HttpClient-Source.component.html',
})
export class HttpClientSourceComponent implements OnInit {
    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };
    private btnChangeText: string;
    private REMOTETEXT = "获取网络源";
    private LOCALTEXT = "获取本地源";

    private service: HttpClientSourceService;
    private editedRowIndex: number;
    private editedProduct: Product;

    constructor( @Inject(HttpClientSourceService) serviceFactory: any) {
        this.service = serviceFactory();//service注入方法与普通的不同
    }

    public ngOnInit(): void {
        var islocal=true;//初次加载本地数据源

        this.view = this.service.map(data => process(data, this.gridState));
        this.service.read(islocal);
        this.GetCurrentBtnText();
    }

    private changeHttpClient() {
        this.service.update();
        this.GetCurrentBtnText();
    }

    private GetCurrentBtnText() {
        this.btnChangeText = this.service.IsLocal ? this.REMOTETEXT : this.LOCALTEXT;
    }
}
