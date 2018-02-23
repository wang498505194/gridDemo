
import { BEOperationType } from "../Enum/BEOperationType";
import { GSPBizEntityObject } from "../GSPBizEntityObject";

/**
* BE操作基类.
* BE操作，是基于服务端业务逻辑构件的，每个操作都是其中的一个方法。
* 但BE对用户隐藏了该层关系，即让用户感觉不到后台构件的存在。
* 应该确保BE操作的Code、Name与Method的Code、Name的一致。
* @author wangjiegj<wangjiegj@inspur.com>
 */


/**
* BE操作基类.
* BE操作，是基于服务端业务逻辑构件的，每个操作都是其中的一个方法。
* 但BE对用户隐藏了该层关系，即让用户感觉不到后台构件的存在。
* 应该确保BE操作的Code、Name与Method的Code、Name的一致。
*/
export class BizOperation {


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
     * 描述
     */
    public Description: string;

    /**
     * 方法Id
     */
    public MethodId: string;

    /**
     * 对应构件实体Id
     */
    public ComponentId: string;

    /**
     * 是否可见
     */
    public IsVisible: boolean;

    /**
     * 操作类型
     */
    public OpType: BEOperationType;

    /**
     * 所属的Node节点
     */
    public Owner: GSPBizEntityObject;

    /**
     * 所属扩展模型元数据ID
     */
    public BelongModelID: string;
    
}
