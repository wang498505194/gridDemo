import { GSPCommonElement } from "../../CommonModel/index";
import { GSPViewObject } from "./GSPViewObject";
import { ViewModelMapping } from "./Common/ViewModelMapping";
import { ElementHelpType } from "./Enum/ElementHelpType";
import { BaseDictInfo } from "./LCMTemp/BaseDictInfo";



/**
 * VO节点元素
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * VO节点元素
 */
export class GSPViewModelElement extends GSPCommonElement {

    /**
     * 是否只读
     */
    IsReadOnly: boolean;

    /**
     * 服务器使用
     */
    IsBeckendOnly: boolean;

    /**
     * 隶属的VO节点
     */
    Owner: GSPViewObject;

    /**
     * 属性映射，VMElement可以映射到BE，或者DM Element上
     */
    Mapping: ViewModelMapping;

    /**
     * 是否立即提交
     * 表单上设置了立即提交控制的属性发生变更后，会自动执行Modfiy将累积变更提交到应用服务器
     */
    ImmediateSubmission: boolean;

    /**
     * 是否在过滤中显示
     */
    ShowInFilter: boolean;

    /**
     * 是否在排序中显示
     */
    ShowInSort: boolean;

    /**
     * 帮助类型
     */
    HelpType: ElementHelpType;

    /**
     * 帮助定义
     */
    HelpDefine: BaseDictInfo;

}
