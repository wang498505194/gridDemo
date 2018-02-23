
import { BizOperation } from "./BizOperation";
import { BEOperationType } from "../Enum/BEOperationType";
import { AuthType } from "../Enum/AuthType";
import { BEDeterminationType } from "../Enum/BEDeterminationType";
import { BETriggerTimePointType } from "../Enum/BETriggerTimePointType";
import { RequestNodeTriggerType } from "../Enum/RequestNodeTriggerType";

/**
* 联动规则元数据定义
* @author wangjiegj<wangjiegj@inspur.com>
 */


/**
* 联动规则元数据定义
* 
*/
export class Determination extends BizOperation {


    /**
     * 操作类型
     */
    get OpType(){
        return BEOperationType.Determination;
    }
    
    /**
     * Determination类型
     */
    public DeterminationType: BEDeterminationType;

    /**
     * 触发时机的类型
     */
    public TriggerTimePointType: BETriggerTimePointType;   

    /**
     * Node状态触发时机的类型
     */
    public RequestNodeTriggerType: RequestNodeTriggerType;

    /**
     * 触发时变更集中需要包含的字段LabelID集合
     */
    public RequestElements: string[];

    /**
     * 获取当前计算规则的前置计算规则
     * 根据元数据设计器上配置的计算顺序生成的当前计算规则的前置规则
     */
    public PreDtmId: Map<BETriggerTimePointType,string>;
    
}
