import { GSPCommonElement } from "../../CommonModel/index";
import { RequiredCheckOccasion } from "./Enum/RequiredCheckOccasion";



/**
* BE节点实体类
* @author wangjiegj<wangjiegj@inspur.com>
 */


/**
* BE节点实体类
*/
export class GSPBizEntityElement extends GSPCommonElement {

    /**
     * 计算表达式
     */
    CalculationExpress: string;

    /**
     * 验证表达式
     */
    ValidationExpress: string;

    /**
     * 是否只读
     */
    Readonly: boolean;

    /**
     * 必填检查时机
     */
    private requiredCheckOccasion=RequiredCheckOccasion.All;

    get RequiredCheckOccasion(): RequiredCheckOccasion {
        return this.requiredCheckOccasion;
    }

    set RequiredCheckOccasion(value: RequiredCheckOccasion) {
        this.requiredCheckOccasion = value;
    }

}
