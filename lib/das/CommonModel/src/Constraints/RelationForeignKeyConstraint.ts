import { RelationResource } from "./RelationResource";
import { ForeignKeyConstraint } from "./ForeignKeyConstraint";

/**
 * 关联外键约束
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 关联外键约束
 */
export class RelationForeignKeyConstraint extends ForeignKeyConstraint<RelationResource,RelationResource> {

    /**
     * 关联资源数据
     */
    public Resource: RelationResource;

    /**
     * 违反约束时提示的信息
     */
    public ShowMessage: string;
}