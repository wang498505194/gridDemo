import { Component, OnInit } from '@angular/core';
import { Columns } from '../../assets/DOTest';

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
}
