// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pop-up',
//   templateUrl: './pop-up.component.html',
//   styleUrls: ['./pop-up.component.css']
// })
// export class PopUpDemoComponent  {
//     private toggleText: string = "Show";
//     private show: boolean = false;

//     public onToggle(): void {
//         this.show = !this.show;
//         this.toggleText = this.show ? "Hidе" : "Show";
//     }
//     public close(): void {
//         console.log("触发");
//         this.show = false;
//     }
// }

// import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

// @Component({
//     selector: 'app-pop-up',
//     styles: [`
//       .content {
//         padding: 30px;
//         color: #787878;
//         background-color: #fcf7f8;
//         border: 1px solid rgba(0,0,0,.05);
//       }
//   `],
//     template: `
//       <button #anchor (click)="toggle()" class="k-button">{{toggleText}} Popup</button>
//       <kendo-popup #popup [anchor]="anchor" popupClass="content" *ngIf="show">
//         Popup content.
//       </kendo-popup>
//   `,
//     encapsulation: ViewEncapsulation.None
// })
// export class PopUpDemoComponent {
//     private toggleText = 'Show';
//     private show = false;

//     /**
//      * 通过@ViewChild,访问模板中的组件
//      * 模板中相应组件加#锚定标记
//      */
//     @ViewChild('anchor') public anchor: ElementRef;
//     @ViewChild('popup', { read: ElementRef }) public popup: ElementRef;

//     /**
//      * 捕获键盘事件，esc键按下
//      * @param event 
//      */
//     @HostListener('keydown', ['$event'])
//     public keydown(event: any): void {
//         if (event.keyCode === 27) {
//             this.toggle(false);
//         }
//     }

//     /**
//      * 添加全局事件，单击动作，并传入单击对象
//      * 通过判断对象是否是特定按钮，决定是否执行popUp关闭动作
//      * @param event event.target 代表单击了谁
//      */
//     @HostListener('document:click', ['$event'])
//     public documentClick(event: any): void {
//         console.log("单击事件。");
//         console.log(event.target);
//         if (!this.contains(event.target)) {
//             this.toggle(false);
//         }
//     }

//     public toggle(show?: boolean): void {
//         this.show = show !== undefined ? show : !this.show;
//         this.toggleText = this.show ? 'Hide' : 'Show';
//     }

//     /**
//      * 判断是否是按钮
//      * @param target 
//      */
//     private contains(target: any): boolean {
//         console.log(this.anchor.nativeElement);
//         return this.anchor.nativeElement.contains(target) ||
//             (this.popup ? this.popup.nativeElement.contains(target) : false);
//     }
// }

import { Component, ElementRef, TemplateRef, ViewContainerRef, ViewChild } from '@angular/core';
import {
  PopupService,
  PopupRef
} from '@progress/kendo-angular-popup';

@Component({
  selector: 'my-app',
  template: `
    <ng-template #template>
      <p style="margin: 30px;">外置弹出框</p>
    </ng-template>
    <div class="example-wrapper">
      <button #anchor (click)="togglePopup(anchor, template)" class="k-button">Toggle popup</button>
    </div>

    <div class="example-wrapper">
      <button #anchor (click)="togglePopup2(anchor, template)" class="k-button">使用Container</button>
      <div #container><!-- the popup will be appended after this element--></div>
    </div>
  `
})
export class PopUpDemoComponent {
    private popupRef: PopupRef;
    @ViewChild('container', { read: ViewContainerRef }) public container: ViewContainerRef;
    
    constructor(private popupService: PopupService) {}

    public togglePopup(anchor: ElementRef, template: TemplateRef<any>) {
      if (this.popupRef) {
        this.popupRef.close();
        this.popupRef = null;
      } else {
        this.popupRef = this.popupService.open({
          anchor: anchor,
          content: CustomPopUpDetailComponent
        //   content: template
        });
      }
  }
  public togglePopup2(anchor: ElementRef, template: TemplateRef<any>) {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
    } else {
      this.popupRef = this.popupService.open({
        anchor: anchor,
        appendTo: this.container,
        content: CustomPopUpDetailComponent
      });
    }
}
}

// import { Component } from '@angular/core';

@Component({
  selector: 'custom-component',
  template: `
    <ul>
        <li>{{name}} 1</li>
        <li>{{name}} 2</li>
        <li>{{name}} 3</li>
    </ul>
  `,
  styles: [`
    ul {
      padding: 20px 40px;
      margin: 0;
    }
  `]
})
export class CustomPopUpDetailComponent {
    public name = '自定义PopUp';
}







