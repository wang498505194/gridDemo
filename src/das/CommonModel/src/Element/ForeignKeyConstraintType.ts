/**
 * 外键约束类型
 * @author wangjiegj<wangjiegj@inspur.com>
 */

/**
 * 外键约束类型
 */
enum ForeignKeyConstraintType {
    /**
     * 禁用
     */
    Forbid=0,

    /**
     * 启用
     */
    Permit=1,
}

export{ForeignKeyConstraintType}
