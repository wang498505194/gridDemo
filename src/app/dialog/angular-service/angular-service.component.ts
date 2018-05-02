import { Component } from '@angular/core';
import {
  WindowService,
  WindowRef,
  WindowCloseResult
} from '@progress/kendo-angular-dialog';
import { WindowDemoComponent } from '../window/window.component';
import { WindowDetailComponent } from '../view-container/windowDetail.component';

@Component({
  selector: 'dialog-angular-service',
  template: `
    <div class="example-wrapper">
      <button (click)="openWindow()" class="k-button">Open Window</button>
    </div>

    <div kendoWindowContainer></div>
  `
})
export class AngularServiceComponent {
  constructor( private windowService: WindowService ) {}

  public openWindow() {
      const window: WindowRef = this.windowService.open({
          title: 'My Window',
          // content: WindowDemoComponent,
          content:WindowDetailComponent,
          width: 450,
          height: 200
      });

      window.result.subscribe((result) => {
          if (result instanceof WindowCloseResult) {
              console.log('Window was closed!');
          }
      });
  }
}

