import { Component } from '@angular/core';

@Component({
    selector: 'treeViewFlatData',
    templateUrl: './html/treeViewFlatData-Source.component.html',
})
export class TreeViewFlatDataComponent {
  public expandedKeys: any[] = ["0"];//默认展开第一组
  public disabledKeys:any[]=["Root Node 1"];
    public treeNodes: any[] = [
        {
          id: 1,
          desc: 'Root Node 1'
        }, {
          id: 2,
          desc: 'Root Node 2'
        }, {
          id: 3,
          parentId: 2,
          desc: 'Child node of Root Node 2_01'
        }, {
          id: 4,
          parentId: 2,
          desc: 'Child node of Root Node 2_02'
        }, {
          id: 5,
          parentId: 2,
          desc: 'Child node of Root Node 2_03'
        }, {
          id: 6,
          parentId: 1,
          desc: 'Child node of Root Node 1_01'
        }
        , {
          id: 7,
          parentId: 1,
          desc: 'Child node of Root Node 1_02'
        }
    ];
}
