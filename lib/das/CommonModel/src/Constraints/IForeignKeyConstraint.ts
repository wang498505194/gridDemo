import { ConstraintType } from "./ConstraintType";
import { Resource } from "./Resource";

/**
 * 外键关联接口
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 外键关联接口
 */
export interface IForeignKeyConstraint {

    /**
     * 约束类型
     */
    ConstraintType: ConstraintType;

    /**
     * 外键关联关系列表
     */
    FKeyRefPairs: Map<Resource,Resource>[];
}