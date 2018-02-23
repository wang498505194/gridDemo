/**
* BE Determination的类型
* @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
* BE Determination的类型
 */
enum BEDeterminationType {
    /**
     * 非持久化: 所对应的计算结果字段是虚拟列，不需要持久化。 此时只需要读取和修改后进行计算
     */
    Transient = 0,
        
    /**
     * 持久化: 所对应的计算结果字段是持久化的。数据保存前需要计算
     */
    Persistent,

}

export{BEDeterminationType}