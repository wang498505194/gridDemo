/**
* BE 操作类型
* @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
* BE 操作类型
 */
enum BEOperationType {
    /**
     * 自定义操作
     */
    Action,
        
    /**
     * 数据完整性检查
     */
    Validation,

    /**
     * 自动计算
     */
    Determination,

    /**
     * 查询
     */
    Query,
        
    /**
     * 事件订阅
     */
    Subscription,

    /**
     * 初始化
     */
    Initiation,

    /**
     * 系统服务
     */
    BasicService,

}

export{BEOperationType}