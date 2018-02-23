import { IGSPCommonObject } from "./Interface/IGSPCommonObject";
import { GSPElementDataType } from "./Element/GSPElementDataType";
import { ElementCodeRuleConfig } from "./Element/ElementCodeRuleConfig";
import { ElementDefaultVauleType } from "./Element/ElementDefaultVauleType";
import { GSPCommonObjectType } from "./Object/GSPCommonObjectType";
import { GSPColumnGenerate } from "./Object/GSPColumnGenerate";
import { IGSPCommonElement } from "./Interface/IGSPCommonElement";
import { GSPUniqueConstraint } from "./Object/GSPUniqueConstraint";
import { IGSPCommonModel } from "./Interface/IGSPCommonModel";
import { GSPHirarchyInfo } from "./Object/GSPHirarchyInfo";
import { GSPAssociationKey } from "./Element/GSPAssociationKey";



/**
 * 节点元数据
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * 节点元数据
 */
export class GSPCommonObject implements IGSPCommonObject {

    /**
     * 唯一标志
     */
    ID: string;

    /**
     * 编号
     */
    Code: string;

    /**
     * 名称
     */
    Name: string;

    /**
     * 数据标识
     */
    LabelID: string;

    /**
     * 字段数据类型
     */
    MDataType: GSPElementDataType;

    /**
     * 编码规则配置
     */
    BillCodeConfig: ElementCodeRuleConfig;

    /**
     * 默认值
     */
    DefaultValue: string;

    /**
     * 字段默认值类型
     */
    DefaultVauleType: ElementDefaultVauleType;

    /**
     * 长度
     */
    Length: number;

    /**
     * 精度
     */
    Precision: number;

    /**
     * 节点类型
     */
    ObjectType: GSPCommonObjectType;

    /**
     * 引用的数据对象标识
     */
    RefDataObjectID: string;

    /**
     * 是否逻辑删除
     */
    LogicDelete: boolean;

    /**
     * 列生成规则
     */
    ColumnGenerateID: GSPColumnGenerate;

    /**
     * 当前节点主键字段
     */
    IDElement: IGSPCommonElement;

    /**
     * 当前节点字段集合
     */
    ContainElements: IGSPCommonElement[];

    /**
     * 当前节点的子节点集合
     */
    ContainChildObjects: IGSPCommonObject[];

    /**
     * 唯一约束集合
     */
    ContainConstraints: GSPUniqueConstraint[];

    /**
     * 父节点
     */
    ParentObject: IGSPCommonObject;

    /**
     * 所属模型
     */
    BelongModel: IGSPCommonModel;

    /**
     * 所属模型Id
     */
    BelongModelID: string;

    /**
     * 排序表达式
     */
    OrderbyCondition: string;

    /**
     * 过滤条件表达式
     */
    BelongObject: IGSPCommonObject;

    /**
     * 最后更新时间字段Id
     */
    ParentAssociation: boolean;

    /**
     * 创建人字段Id
     */
    CreatorElementID: string;

    /**
     * 最后修改人字段Id
     */
    ModifierElementID: boolean;

    /**
     * 是否记录已删除数据
     */
    RecordDelData: boolean;

    /**
     * 是否只读
     */
    IsReadOnly: boolean;

    /**
     * 是否非持久化
     */
    IsVirtual: boolean;

    /**
     * 状态字段
     */
    StateElementID: string;

    /**
     * 分级信息
     */
    HirarchyInfo: GSPHirarchyInfo;

    /**
     * 关联关系外键列表
     */
    Keys: GSPAssociationKey[];
}
