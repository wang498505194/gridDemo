
import { BizOperation } from "./BizOperation";
import { BEOperationType } from "../Enum/BEOperationType";
import { AuthType } from "../Enum/AuthType";

/**
* BE基本操作
* @author wangjiegj<wangjiegj@inspur.com>
 */


/**
* BE基本操作
*/
export class BizAction extends BizOperation {


    /**
     * 操作类型
     */
    get OpType(){
        return BEOperationType.Action;
    }
    
    /**
     * 权限类型
     */
    public CurentAuthType: AuthType;

    /**
     * 业务操作ID列表（用于控制动作权限）
     */
    public OpIdList: string[];
}
