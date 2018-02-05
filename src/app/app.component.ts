import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
})
export class AppComponent implements OnInit {
  title :string;
    public ngOnInit(): void {
      this.title="KendoUI Components";
    }
}
