import { BEOperationType } from "../Enum/BEOperationType";
import { BizOperation } from "./BizOperation";
import { RequestNodeTriggerType } from "../Enum/RequestNodeTriggerType";
import { BEValidationType } from "../Enum/BEValidationType";


/**
* 验证操作
* @author wangjiegj<wangjiegj@inspur.com>
 */


/**
* 验证操作
*/
export class Validation extends BizOperation {


    /**
     * 操作类型
     */
    get OpType(){
        return BEOperationType.Validation;
    }

    /**
     * 校验器类型：操作许可校验、数据一致性校验。
     */
    public ValidationType: BEValidationType;

    /**
     * 执行顺序
     */
    public Order: number;

    /**
     * 前置校验列表，列表不分先后次序
     */
    public Precedings: Validation[];

    /**
     * 后置校验列表，列表不分先后次序
     */
    public Succeedings: Validation[];

    /**
     * 前置校验列表，列表不分先后次序
     */
    public PrecedingIds: string[];

    /**
     * 后置校验列表，列表不分先后次序
     */
    public SucceedingIds: string[];

    /**
     * 执行时机
     */
    public RequestNodeTriggerType: RequestNodeTriggerType;
}
