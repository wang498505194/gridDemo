import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector:'grid-component',
  templateUrl:'./grid.component.html',
})
export class GridDemoComponent implements OnInit {
  title :string;
    public ngOnInit(): void {
      this.title="Grid Component";
    }
}
