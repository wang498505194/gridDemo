import { Component, OnInit } from '@angular/core';
import { EnumTest } from './EnumTest';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];

    public value = ['Basketball', 'Cricket']

    public listItems2: Array<{ text: string, value: EnumTest }> = [
      { text: "Small", value: EnumTest.Enum2 },
      { text: "Medium", value: EnumTest.Enum1 },
      { text: "Large", value: EnumTest.Enum3 }
  ];


  public selectedValue: { text: string, value: number } = { text: "Foo", value: 1 };
}


