/**
* 权限控制类型
* @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
* 权限控制类型
* 控制当前操作使用的权限控制策略
 */
enum BEValidationType {
    /**
     * 数据一致性校验
     */
    Consistency = 0,
        
    /**
     * 操作许可校验
     */
    Operation = 1,
}

export{BEValidationType}