/**
 * 数据类型
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
 * 数据类型
 */
enum DataType {
    /**
    * 可变长字符型
    */
    varchar,

    /**
    * 字符型
    */
    char,

    /**
    * 整型
    */
    int,

    /**
    * 可变长小数
    */
    decimal,

    /**
    * 日期型
    */
    datetime,

    /**
    * 时间戳
    */
    timestamp,

    /**
    * 大二进制型
    */
    blob,

    /**
    * 长文本
    */
    text
}

export {DataType};
