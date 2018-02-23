import { GSPCommonObject, IGSPCommonObject } from "../../CommonModel/index";
import { ViewModelMapping } from "./Common/ViewModelMapping";
import { ViewModelAction } from "./Action/ViewModelAction";
import { GSPViewModelElement } from "./GSPViewModelElement";

/**
 * BE节点实体类
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * BE节点实体类
 */
export class GSPViewObject extends GSPCommonObject {

    /**
     * 服务器使用
     */
    IsBeckendOnly: boolean;

    /**
     * 获取当前节点是否根节点
     */
    IsRootNode: boolean;

    /**
     * 主键Element
     */
    PrimaryKey: string;

    /**
     * 父节点对象
     */
    ParentObject: IGSPCommonObject;

    /**
     * 父节点对象
     */
    Parent: GSPViewObject;

    /**
     * 节点映射，VMObject可以映射到BENode，或者DM上
     */
    Mapping: ViewModelMapping;
    
    /**
     * 是否包含子节点
     */
    HasChildNode: boolean;

    /**
     * 元素集合
     */
    ContainElements: GSPViewModelElement[];

    /**
     * 子节点集合
     */
    ContainChildObjects: GSPViewObject[];
    
    /**
     * 操作集合
     */
    Actions: ViewModelAction[];

    /**
     * 默认页面大小，默认值为0，表示不分页
     */
    DefaultPageSize: number;

}
