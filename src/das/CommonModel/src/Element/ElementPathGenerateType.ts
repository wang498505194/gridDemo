/**
 * 字段分级码生成时机
 * @author wangjiegj<wangjiegj@inspur.com>
 */

/**
 * 字段分级码生成时机
 */
enum ElementPathGenerateType {
    /**
     * 创建时
     */
    CreateNode=0,

    /**
     * 保存时
     */
    SaveNode=1,
}

export{ElementPathGenerateType}
