import { IGSPCommonObject } from "./IGSPCommonObject";
import { RelationForeignKeyConstraint } from "../Constraints/RelationForeignKeyConstraint";

/**
 * 通用模型，作为业务实体，视图模型和数据模型的总接口，用于规划实体数据结构
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * 通用模型，作为业务实体，视图模型和数据模型的总接口，用于规划实体数据结构
 */
export interface IGSPCommonModel {

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
     * 是否记录
     */
    IsRecord: boolean;

    /**
     * 记录历史表
     */
    RecordHistoryTable: string;

    /**
     * 日志对象Id
     */
    LogObjectID: string;

    /**
     * 是否虚拟模型
     */
    IsVirtual: boolean;

    /**
     * 主节点主键字段Id
     */
    PrimayKeyID: string;

    /**
     * 是否允许被继承
     */
    IsAllowDerive: boolean;

    /**
     * 是否允许被扩展
     */
    IsAllowExtend: boolean;

    /**
     * 维度
     */
    Dimension: string;

    /**
     * 分级信息
     */
    Hierarchy: string;

    /**
     * 主节点
     */
    MainObject: IGSPCommonObject;

    /**
     * 扩展类型
     */
    ExtendType: string;

    /**
     * 用于序列化处理子模型元数据的扩展属性
     */
    ExtendNodeList: Map<string, string>;

    /**
     * 当前节点字段集合
     */
    FkConstraints: RelationForeignKeyConstraint[];
}
