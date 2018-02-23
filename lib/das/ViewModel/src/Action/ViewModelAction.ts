import { GSPViewObject } from "../GSPViewObject";
import { ViewModelActionType } from "../Enum/ViewModelActionType";
import { ActionFormatParameter } from "./ActionFormatParameter";
import { VMActionResult } from "./VMActionResult";
import { ViewModelMapping } from "../Common/ViewModelMapping";


/**
 * VM Action抽象类
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * VM Action抽象类
 */
export class ViewModelAction {

    /**
     * 唯一标志
     */
    public ID: string;

    /**
     * 编号
     */
    public Code: string;

    /**
     * 名称
     */
    public Name: string;

    /**
     * Action所在的节点
     */
    public Owner: GSPViewObject;

    /**
     * 类型
     */
    public Type: ViewModelActionType;

    /**
     * 形参集合
     */
    public Parameters: ActionFormatParameter[];

    /**
     * Action执行结果定义
     */
    public Result: VMActionResult;

    /**
     * 操作映射
     */
    public Mapping: ViewModelMapping;

}
