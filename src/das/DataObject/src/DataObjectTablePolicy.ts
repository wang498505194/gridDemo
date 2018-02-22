/**
 * 数据对象类型
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
 * 数据对象类型
 */
enum DataObjectTablePolicy {
    /**
    * 普通表
    */
    Normal,

    /**
    * 年度表
    * 设置年度表后，会根据基础表名生成不同年度的年度表，格式是表名+year，记录不同年份的数据
    */
    Fiscal,
}

export {DataObjectTablePolicy};