/**
 * 映射类型枚举
 * @author wangjiegj<wangjiegj@inspur.com>
 */

/**
 * 映射类型枚举
 */
enum MappingType {
  
    /**
     * BE 
     */
    BizEntity,

    /**
     * DM
     */
    DataModel,

    /**
     * BE节点
     */
    BEObject,

    /**
     * GspDataModel节点
     */
    DMObject,

    /**
     * 节点元素
     */
    Element,

    /**
     * BE操作
     */
    BizOperation,

    /**
     * 构件方法
     */
    ComponentMethod,

    /**
     * 数据对象
     */
    DataObject,

    /**
     * 数据对象列
     */
    GSPColumn,

}

export{MappingType}