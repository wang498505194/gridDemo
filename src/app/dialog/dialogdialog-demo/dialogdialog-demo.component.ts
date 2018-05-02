 import { Component,ViewChild } from '@angular/core';

// @Component({
//     selector: 'app-dialogdialog-demo',
//     templateUrl: './dialogdialog-demo.component.html'
// })
// export class DialogdialogDemoComponent {
//     public opened: boolean = false;

//     public close(status) {
//       console.log(`Dialog result: ${status}`);
//       this.opened = false;
//     }

//     public open() {
//       this.opened = true;
//     }
// }

// @Component({
//   selector: 'my-app',
//   template: `
//     <button kendoButton *ngIf="!opened" (click)="open()">Do not click this button</button>

//     <kendo-dialog title="Oh no!" *ngIf="opened" (close)="close()">
//         <p style="margin: 30px; text-align: center;">The button was clicked.</p>

//         <kendo-dialog-actions>
//             <button kendoButton (click)="close()" [primary]="true">Yes, sorry.</button>
//         </kendo-dialog-actions>
//     </kendo-dialog>
//   `
// })
// export class DialogdialogDemoComponent {
//   // Do not initially show the Dialog
//   public opened: boolean = false;

//   public close() {
//     this.opened = false;
//   }

//   public open() {
//     this.opened = true;
//   }
// }

@Component({
  selector: 'dialog-dialog-demo',
  template: `
    <kendo-dialog #dialog *ngIf="active">
      <kendo-dialog-titlebar>
        <div style="font-size: 18px; line-height: 1.3em;">
          <span class="k-icon k-i-warning"></span> Delete Data
        </div>
      </kendo-dialog-titlebar>
      <p style="margin: 30px; text-align: center;">This action cannot be undone.</p>

      <kendo-dialog-actions>
        <button kendoButton (click)="onDialogClose()">Cancel</button>
        <button kendoButton (click)="onDeleteData()" primary="true">Delete</button>
      </kendo-dialog-actions>
    </kendo-dialog>
  `
})
export class DialogdialogDemoComponent {
  active:boolean=true;

  public onDialogClose() {
      alert("No data deleted.");
      this.active=false;
  }

  public onDeleteData() {
      alert("Data deleted.");
      this.active=false;
  }
}


