import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector:'TreeDemo-component',
  templateUrl:'./treeDemo.component.html',
})
export class TreeDemoComponent implements OnInit {
  title :string;
    public ngOnInit(): void {
      this.title="TreeView Component";
    }
}
