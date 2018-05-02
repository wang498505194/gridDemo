// import { Component } from '@angular/core';
// @Component({
//     selector: 'treeViewDemo',
//     template: `
//     <kendo-treeview
//         [nodes]="data"
//         textField="text"
//         kendoTreeViewExpandable
//         kendoTreeViewSelectable
//         kendoTreeViewHierarchyBinding
//         childrenField="items"
//     >
//     </kendo-treeview>
//   `
// })
// export class TreeViewDemoComponent {
//     public data: any[] = [
//         {
//             text: "Furniture", items: [
//                 { text: "Tables & Chairs" ,items:[
//                     {text:"01"},
//                     {text:"02"},
//                 ]},
//                 { text: "Sofas" },
//                 { text: "Occasional Furniture" }
//             ]
//         },
//         {
//             text: "Decor", items: [
//                 { text: "Bed Linen" },
//                 { text: "Curtains & Blinds" },
//                 { text: "Carpets" }
//             ]
//         }
//     ];
// }

import { Component } from '@angular/core';
  import { Observable } from 'rxjs/Observable';
  import { of } from 'rxjs/observable/of';

  @Component({
      selector: 'my-app',
      template: `
      <kendo-treeview
          kendoTreeViewExpandable

          [nodes]="data"
          textField="text"

          [children]="fetchChildren" 
          [hasChildren]="hasChildren" 
          >
      </kendo-treeview>
  `
  })
  export class TreeViewDemoComponent {

      public data: any[] = [{
              text: "Furniture", items: [
                  { text: "Tables & Chairs" },
                  { text: "Sofas" },
                  { text: "Occasional Furniture" }
              ]
          }, {
              text: "Decor", items: [
                  { text: "Bed Linen" },
                  { text: "Curtains & Blinds" },
                  { text: "Carpets" }
              ]
          }
      ];

      public fetchChildren(node: any): Observable<any[]> {
          debugger;
          //return the parent node's items collection as children
          return of(node.items);
      }

      public hasChildren(node: any): boolean {
          //check if the parent node has children
          return node.items && node.items.length > 0;
      }
  }