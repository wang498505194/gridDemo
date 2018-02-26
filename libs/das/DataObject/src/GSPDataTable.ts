/**
 * 数据对象
 * @author wangjiegj<wangjiegj@inspur.com>
 */

import { Column } from "./Column";
import { DataObjectType } from "./DataObjectType";
import { DataSourceConnectionType } from "./DataSourceConnectionType";

/**
 * 数据对象
 */
export class GSPDataTable {

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
     * 业务对象(LCM获取)
     */
    public BizObject: string;

    /**
     * 创建数据库时的表名,默认是数据对象编号
     */
    public TableName: string;

    /**
     * 数据对象类型(暂为枚举，待定)
     */
    public DataObjectType: DataObjectType;

    /**
     * 备注
     */
    public Comment: string;

    /**
     * 数据库表名
     */
    public DbTableName: string;

    /**
     * 真实使用的数据库,数据引擎对表做增、删、改、查操作及外键约束检查时，使用此属性。
     */
    public RealTableName: string;

    /**
     * 是否系统属性
     */
    public IsSystem: boolean;

    /**
     * 是否已经创建了数据库映射表
     */
    public IsCreated: boolean;

    /**
     * 主键集合
     */
    public PrimaryKeys: string[];

    /**
     * 列集合
     */
    public Columns: Column[];

    /**
     * 是否同步数据类型
     * 默认是true
     */
    public UpdateModifiedColumn: boolean;

    /**
     * 数据库中ddl的版本时间
     */
    public TableVersionTime: Date;

    /**
     * 是否启用国际化
     * 默认false
     */
    public IsInternational: boolean;
}