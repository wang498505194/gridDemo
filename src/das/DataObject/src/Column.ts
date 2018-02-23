/**
 * 数据对象列
 * @author wangjiegj<wangjiegj@inspur.com>
 */

import { DataType } from "./DataType";
import { GSPDataTable } from "./GSPDataTable";

/**
 * 数据对象列
 */
class Column {

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
     * 是否主键,列唯一且非空
     */
    public IsPrimaryKey: boolean;

    /**
     * 基本类型(暂为枚举，待定)
     */
    public DataType: DataType;

    /**
     * 数据长度
     */
    public Length: number;

    /**
     * 数据精度
     */
    public Precision: number;

    /**
     * 备注
     */
    public Comment: string;

    /**
     * 数据库中数据列的名称,不显示
     * 同步数据库时修改
     * 描述了列在数据库表中实际的列名
     */
    public DbColumnCode: string;

    /**
     * 是否可空
     */
    public IsNull: boolean;

    /**
     * 是否必须唯一
     */
    public IsUnique: boolean;

    /**
     * 是否是必须值
     */
    public IsMust: boolean;

    /**
     * 是否是多语字段
     */
    public IsMultilingual: boolean;

    /**
     * 所在数据对象
     */
    public DataTable: GSPDataTable;

    /**
     * 返回当前字段是否系统维护
     */
    public IsSystem: boolean;

    /**
     * 默认值
     */
    public DefaultValue: string;

    /**
     * 证书ID
     */
    public CertificateID: string;

    /**
     * 业务字段ID
     */
    public BizFieldID: string;

    /**
     * 业务字段名称
     */
    public BizFieldName: string;

}

export { Column };