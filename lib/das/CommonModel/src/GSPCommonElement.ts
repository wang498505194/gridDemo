import { IGSPCommonElement } from "./Interface/IGSPCommonElement";
import { GSPElementDataType } from "./Element/GSPElementDataType";
import { ElementCodeRuleConfig } from "./Element/ElementCodeRuleConfig";
import { ElementDefaultVauleType } from "./Element/ElementDefaultVauleType";
import { GSPElementObjectType } from "./Element/GSPElementObjectType";
import { GSPAssociation } from "./Element/GSPAssciation";
import { GSPEnumValue } from "./Element/GSPEnumValue";
import { IGSPCommonObject } from "./Interface/IGSPCommonObject";


/**
 * 字段定义
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * 字段定义
 */
export class GSPCommonElement implements IGSPCommonElement {


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
     * 数据标识
     */
    public LabelID: string;

    /**
     * 字段数据类型
     */
    public MDataType: GSPElementDataType;

    /**
     * 编码规则配置
     */
    public BillCodeConfig: ElementCodeRuleConfig;

    /**
     * 默认值
     */
    public DefaultValue: string;

    /**
     * 字段默认值类型
     */
    public DefaultVauleType: ElementDefaultVauleType;

    /**
     * 长度
     */
    public Length: number;

    /**
     * 精度
     */
    public Precision: number;

    /**
     * 字段对象类型
     */
    public ObjectType: GSPElementObjectType;

    /**
     * 包含的关联列表
     */
    public ChildAssociations: GSPAssociation[];

    /**
     * 包含的关联列表中是否存在关联
     */
    public HasAssociation: boolean;

    /**
     * 包含的枚举列表
     */
    public ContainEnumValues: GSPEnumValue[];

    /**
     * 对应的数据对象的列ID
     */
    public ColumnID: string;

    /**
     * 是否虚拟字段
     */
    public IsVirtual: boolean;

    /**
     * 虚拟字段的自定义表达式。只对虚拟字段才有效。
     */
    public CustomExpression: string;

    /**
     * 是否必须
     */
    public IsRequire: boolean;

    /**
     * 是否关联字段
     */
    public IsRefElement: boolean;

    /**
     * 关联字段Id
     */
    public RefElementId: string;

    /**
     * 是否自定义项
     */
    public IsCustomItem: boolean;

    /**
     * 是否是多语字段
     */
    public IsInternational: boolean;

    /**
     * 当前属性所属结点
     */
    public BelongObject: IGSPCommonObject;

    /**
     * 是否自定义项
     */
    public ParentAssociation: boolean;

    /**
     * 所属模型Id
     */
    public BelongModelID: string;
}
