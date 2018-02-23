/**
* 实体加锁类型
* @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
* 实体加锁类型
 */
enum RequiredCheckOccasion {
    /**
     * 仅保存时
     */
    Save = 1,
        
    /**
     * 此选项在设计器上不暴露, 不应该存在修改时验证保存时不执行的情况
     */
    Modify = 2,

    /**
     * 所有时机
     * 二进制为全1
     */
    All = 3,

}

export{RequiredCheckOccasion}