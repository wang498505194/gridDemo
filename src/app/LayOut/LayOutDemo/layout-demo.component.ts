import { Component } from "@angular/core";

@Component({
    selector: 'layout-component',
    templateUrl:'./layout-demo.component.html',
    // template:`<p>layout-component</p>`,
      styles: [`
          kendo-tabstrip p {
              margin: 0;
              padding: 8px;
          }
  
          kendo-splitter-pane {
              padding: 16px;
          }
      `]
  })
  export class LayoutDemoComponent {
    // private baseImageUrl: string = "https://demos.telerik.com/kendo-ui/content/web/panelbar/";
  
    // private imageUrl(imageName: string) :string {
    // //   return this.baseImageUrl + imageName + ".jpg";
    //   return "https://demos.telerik.com/kendo-ui/content/web/panelbar/" + imageName + ".jpg";
    // }
  }