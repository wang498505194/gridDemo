/**
* 触发时机，供Validation、Determination共用。
* @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
* 触发时机，供Validation、Determination共用。
 */
enum RequestNodeTriggerType {
    /** 
     * 不执行
     */ 
    None = 0,

    /** 
     * 实例创建时执行
     */ 
    Created = 1,

    /** 
     * 实例更新时执行
     */ 
    Updated = 2,

    /** 
     * 实例删除时执行
     */ 
    Deleted = 4,

    /** 
     * 校验或者自动计算时(分别用于Validation、Determination)
     */ 
    ValidateOrDetermine = 8,

    /** 
     * 数据加载时，Determination专用。
     */ 
    Load = 16,

}

export{RequestNodeTriggerType}