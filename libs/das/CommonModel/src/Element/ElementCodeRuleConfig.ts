import { GSPBillCodeGenerateType } from "./GSPBillCodeGenerateType";
import { GSPBillCodeGenerateOccasion } from "./GSPBillCodeGenerateOccasion";

/**
 * 编码规则配置
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 编码规则配置
 */
export class ElementCodeRuleConfig {

    /**
     * 是否单据编号
     */
    public CanBillCode: boolean;

    /**
     * 单据编号Id
     */
    public BillCodeID: string;

    /**
     * 单据编号名称
     */
    public BillCodeName: string;

    /**
     * 代码生成类型
     */
    public CodeGenerateType: GSPBillCodeGenerateType;

    /**
     * 编码生成时机
     */
    public CodeGenerateOccasion: GSPBillCodeGenerateOccasion;

}
