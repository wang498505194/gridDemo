import { IGSPCommonElement } from "../Interface/IGSPCommonElement";
import { GSPAssociationKey } from "./GSPAssociationKey";
import { ForeignKeyConstraintType } from "./ForeignKeyConstraintType";
import { GSPDeleteRuleType } from "./GSPDeleteRuleType";
import { JoinMode } from "./JoinMode";
import { IGSPCommonModel } from "../Interface/IGSPCommonModel";

/**
 * 关联关系
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 关联关系
 */
export class GSPAssociation {

    /**
     * 标识
     */
    public Id: string;

    /**
     * 引用的数据模型
     */
    public RefModel: IGSPCommonModel;

    /**
     * 引用的数据模型ID
     */
    public RefModelID: string;

    /**
     * 引用的数据模型编号
     */
    public RefModelCode: string;

    /**
     * 引用的数据模型名称
     */
    public RefModelName: string;
    
    /**
     * 隶属于的元素
     */
    public BelongElement: IGSPCommonElement;

    /**
     * KeyCollection
     */
    public KeyCollection: GSPAssociationKey[];

    /**
     * 引用的元素集合
     */
    public RefElementCollection: IGSPCommonElement[];

    /**
     * 过滤条件
     */
    public Where: string;
    
    /**
     * 提示错误信息
     */
    public AssSendMessage: string;

    /**
     * 外键约束类型
     */
    public ForeignKeyConstraintType: ForeignKeyConstraintType;

    /**
     * 引用的元素集合
     */
    public DeleteRuleType: GSPDeleteRuleType;

    /**
     * 联接方式
     */
    public JoinMode: JoinMode;

}
