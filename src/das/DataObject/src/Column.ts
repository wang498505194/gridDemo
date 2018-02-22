/**
 * 数据对象列
 * @author wangjiegj<wangjiegj@inspur.com>
 */

import { DataType } from "./DataType";

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
    * 是否主键
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
}

export { Column };