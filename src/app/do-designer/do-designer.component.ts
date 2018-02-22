import { Component, OnInit } from '@angular/core';
import { Columns } from '../../assets/DOTest';
import { Column } from '../../Das/DataObject/index';

@Component({
  selector: 'app-do-designer',
  templateUrl: './do-designer.component.html',
  styleUrls: ['./do-designer.component.scss']
})
export class DoDesignerComponent implements OnInit {
  
  public columns: any[] = Columns;
  constructor() { }

  ngOnInit() {
  }

  createNewColumn(): Column {
    return new Column();
}
}
