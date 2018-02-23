import { ConstraintType } from "./ConstraintType";
import { GSPCommonElement } from "../GSPCommonElement";

/**
 * 唯一约束
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 唯一约束
 */
export class GSPUniqueConstraint {
    
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
     * 约束类型
     */
    public Type: ConstraintType;

    /**
     * 约束消息
     */
    public ConstraintMessage: string;
    
    /**
     * 约束包含的字段列表
     */
    public ElementList: GSPCommonElement[];
}