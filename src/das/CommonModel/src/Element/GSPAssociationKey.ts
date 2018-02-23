/**
 * 关联外键
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 关联外键
 */
export class GSPAssociationKey {

    /**
     * 源元素ID
     */
    public SourceElement: string;

    /**
     * 来源字段显示名称
     */
    public SourceElementDisplay: string;


    /**
     * 目标元素ID
     */
    public TargetElement: string;

    /**
     * 目标字段显示名称
     */
    public TargetElementDisplay: string;

    /**
     * 引用模型名称
     */
    public RefdataModelName: string;
}