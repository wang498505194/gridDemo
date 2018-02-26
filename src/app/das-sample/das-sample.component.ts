import { Component, OnInit } from '@angular/core';
import { DOSample } from '../../../libs/dasSample/DO/doSample';
import { GSPDataTable } from '../../../libs/das/DataObject';
import { UserModel } from '../../../libs/dasSample/user/userModel';
import { userSample } from '../../../libs/dasSample/user/userSample';


@Component({
  selector: 'app-das-sample',
  templateUrl: './das-sample.component.html',
  styleUrls: ['./das-sample.component.scss']
})
export class DasSampleComponent implements OnInit {

json01:string;

json02:string;

  constructor() {
    
  }

  ngOnInit() {
    // this.do=new UserModel();
   
    let m=userSample as UserModel;
    this.json01=JSON.stringify(m);
    
    let n=new UserModel();
    n.ID='真正的id';
    n.Code=userSample.Code;
    n.Name=userSample.Name;
    this.json02=JSON.stringify(n);



    console.log(this.json02);
  }

  syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        // return '<span class="' + cls + '">' + match + '</span>';
        return match;
    });
}

}
