import { IForeignKeyConstraint } from "./IForeignKeyConstraint";
import { ConstraintType } from "./ConstraintType";
import { Resource } from "./Resource";

/**
 * 外键约束关系
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 外键约束关系
 */
export abstract class Constraint
{

    /**
     * 约束内码
     */
    public ID: string;

    /**
     * 数据模型ID
     */
    public DataModelID: string;

    /**
     * 约束类型
     */
    public ConstraintType: ConstraintType;

    /**
     * 约束资源
     */
    public Resource: Resource;
    
}