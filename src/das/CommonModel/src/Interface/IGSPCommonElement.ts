import { GSPElementDataType } from "../Element/GSPElementDataType";
import { ElementCodeRuleConfig } from "../Element/ElementCodeRuleConfig";
import { IGSPCommonObject } from "./IGSPCommonObject";
import { ElementDefaultVauleType } from "../Element/ElementDefaultVauleType";
import { GSPElementObjectType } from "../Element/GSPElementObjectType";
import { GSPAssociation } from "../Element/GSPAssciation";
import { GSPEnumValue } from "../Element/GSPEnumValue";

/**
 * 字段定义
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * 字段定义
 */
export interface IGSPCommonElement {

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
     * 字段对象类型
     */
    ObjectType: GSPElementObjectType;

    /**
     * 包含的关联列表
     */
    ChildAssociations: GSPAssociation[];

    /**
     * 包含的关联列表中是否存在关联
     */
    HasAssociation: boolean;

    /**
     * 包含的枚举列表
     */
    ContainEnumValues: GSPEnumValue[];

    /**
     * 对应的数据对象的列ID
     */
    ColumnID: string;

    /**
     * 是否虚拟字段
     */
    IsVirtual: boolean;

    /**
     * 虚拟字段的自定义表达式。只对虚拟字段才有效。
     */
    CustomExpression: string;

    /**
     * 是否必须
     */
    IsRequire: boolean;

    /**
     * 是否关联字段
     */
    IsRefElement: boolean;

    /**
     * 关联字段Id
     */
    RefElementId: string;

    /**
     * 是否自定义项
     */
    IsCustomItem: boolean;

    /**
     * 是否是多语字段
     */
    IsInternational: boolean;

    /**
     * 当前属性所属结点
     */
    BelongObject: IGSPCommonObject;

    /**
     * 是否自定义项
     */
    ParentAssociation: boolean;

    /**
     * 所属模型Id
     */
    BelongModelID: string;

}
