/**
* Determination触发时机
* @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
* Determination触发时机
 */
enum BETriggerTimePointType {
    /**
     * 不执行,用于判断时机比较结果
     */
    None = 0,
        
    /**
     * 数据加载后, 目前来说是retrieve和query时触发
     * 此事件只针对 BODeterminationType.Transient类型的Determination 也就是说不能够操作持久化成员
     * 用于计算虚拟字段值,动作联动等操作
     */
    AfterLoading = 1,

    /**
     * 数据更新后
     * 可以操作持久化或非持久化属性和Node
     */
    AfterModify = 2,

    /**
     * 校验执行时
     * ValidateAndDetermine 方法中执行
     */
    Determine = 4,
    
    /**
     * 一致性检查前，保存中进行Validation之前进行，是修改数据的最后时机
     */
    BeforeCheck = 8,
    
    /**
     * 生成编码后
     * 用于同步更新根据编号生成规则产生的编号
     */
    AfterNumbersAdjusted = 16,
    
    /**
     * 保存失败后，现阶段可以不加
     * Finalize,Validation执行失败后执行,用于清理缓存垃圾数据等操作
     */
    AfterFailedSaveAttempt = 32,
    
    /**
     * 调用RetrieveDefault时触发
     */
    RetrieveDefault = 64


}

export{BETriggerTimePointType}