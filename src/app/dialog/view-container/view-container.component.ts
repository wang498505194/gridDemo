import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { WindowService } from '@progress/kendo-angular-dialog';
import { WindowDemoComponent } from '../window/window.component';
import { WindowDetailComponent } from './windowDetail.component';

@Component({
 selector: 'app-view-container',
 template: `
   <button kendoButton (click)="open(1)">Open window1</button>
   <button kendoButton (click)="open(2)">Open window2</button>

   <ng-container #container></ng-container>
 `
})
export class ViewContainerComponent {
 constructor(private windowService: WindowService) { }

 @ViewChild("container", { read: ViewContainerRef })
 public containerRef: ViewContainerRef;

 public open(name:string) {
   this.windowService.open({
     appendTo: this.containerRef,
     title: name=='1'?'关联':'枚举',
     content: WindowDetailComponent
   });
 }
}