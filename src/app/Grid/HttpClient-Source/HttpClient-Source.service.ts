import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

@Injectable()
export class HttpClientSourceService extends BehaviorSubject<any[]> {
    constructor(private http: HttpClient) {
        super([]);
    }

    private data: any[] = [];

    private islocal = true;

    public read(local?: boolean) {
        this.islocal = local;

        if (this.data.length) {
            return super.next(this.data);
        }

        this.fetch()
            .do(data => {
                debugger;
                this.data = data;
            })
            .subscribe(data => {
                debugger;
                super.next(data);
            });
    }
    get IsLocal(){return this.islocal;}

    public update() {
        this.islocal = !this.islocal;
        this.fetch()
            .do(data => {
                this.data = data;
            })
            .subscribe(data => {
                super.next(data);
            });
    }

    private fetch(): Observable<any[]> {
        debugger;
        if (this.islocal) {
            return this.http.get('assets/Products.json').map(res => <any[]>res);
            //说明：
            //本地资源一般放置在assets文件夹；
            //若希望自定义文件夹，需在.angular-cli.json/asstes中进行配置，否则会出现资源无法访问的问题；
            //格式如下，其中root是根目录，assets项中导入src/asstes文件夹；
            //"root": "src",
            //   "outDir": "dist",
            //   "assets": [
            //     "assets",
            //     "favicon.ico"
            //   ],
        }
        else {
            return this.http
                .jsonp(`https://demos.telerik.com/kendo-ui/service/Products/`, 'callback')
                .map(res =>{
                    debugger;
                    return <any[]>res;
                });
        }
    }


    private serializeModels(data?: any): string {
        return data ? `&models=${JSON.stringify([data])}` : '';
    }
}
