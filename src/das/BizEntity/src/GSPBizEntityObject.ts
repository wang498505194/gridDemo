import { GSPCommonObject } from "../../CommonModel/index";
import { GSPBusinessEntity } from "./GSPBusinessEntity";
import { BizOperation } from "./Operation/BizOperation";



/**
* BE节点实体类
* @author wangjiegj<wangjiegj@inspur.com>
 */


/**
* BE节点实体类
*/
export class GSPBizEntityObject extends GSPCommonObject {

    /**
     * 获取当前节点是否根节点
     */
    IsRootNode: boolean;

    /**
     * 当前节点的操作集合
     */
    Operations: BizOperation[];

    /**
     * 当前节点的所属模型
     */
    BelongModel: GSPBusinessEntity;

    /**
     * 父节点
     */
    ParentObject: GSPBizEntityObject;

}
