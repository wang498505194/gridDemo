import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogDemoComponent implements OnInit {

  @ViewChild('window') window: any;

  constructor() { }

  ngOnInit() {
  }

}
