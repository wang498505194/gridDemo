import { ResourceType } from "./ResourceType";
import { Resource } from "./Resource";

/**
 * 关联约束信息
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 关联约束信息
 */
export class RelationResource extends Resource{

    /**
     * 资源类型
     */
    public Type: ResourceType;

    /**
     * 名称
     */
    public TableName: string;
    
    /**
     * 列名
     */
    public ColumnName: string;
}