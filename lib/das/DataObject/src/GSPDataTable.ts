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
     * 是否初始化
     */
    public IsInit: boolean;

    /**
     * 是否已经创建了数据库映射表
     */
    public IsCreated: boolean;

    /**
     * 数据对象实表策略类型(相较于枚举，保留扩展能力)
     * Normal-普通表
     * Fiscal-年度表
     */
    public Policy: string[];

    /**
     * 主键集合
     */
    public PrimaryKeys: string[];

    /**
     * 数据源连接列表
     */
    public DataSourceConnectList: string[];

    /**
     * 列集合
     */
    public Columns: Column[];

    /**
     * 当前数据源连接是否是自定义的
     * DefaultConn表示默认的数据源连接
     * UserDefConn表示自定义数据源
     */
    public DataSourceConnectionType: DataSourceConnectionType;

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