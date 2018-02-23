/**
* 实体加锁类型
* @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
* 实体加锁类型
 */
enum GSPDataLockType {
    /**
     * 悲观锁：需要显式加锁成功后才能编辑数据
     */
    PessimisticLocking = 0,
        
    /**
     * 乐观锁：提交数据时比较数据版本，如果不一致，数据作废
     */
    OptimisticLocking = 1,

    /**
     * 不加锁：不保证实体数据并发一致性
     */
    None = 2,

}

export{GSPDataLockType}