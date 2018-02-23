import { IForeignKeyConstraint } from "./IForeignKeyConstraint";
import{Constraint} from "./Constraint";
import { Resource } from "./Resource";

/**
 * 外键约束关系
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 外键约束关系
 */
export class ForeignKeyConstraint<FKeyResourceType extends Resource, RefResourceType extends Resource> extends Constraint implements IForeignKeyConstraint
{
    
    /**
     * 外键关联关系列表
     */
    public FKeyRefPairs: Map<Resource,Resource>[];
}