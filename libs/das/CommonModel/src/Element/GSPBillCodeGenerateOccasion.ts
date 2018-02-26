/**
 * 代码生成规则执行时机
 * @author wangjiegj<wangjiegj@inspur.com>
 */

/**
 * 代码生成规则执行时机
 */
enum GSPBillCodeGenerateOccasion {
    /**
     * 系统定义
     */
    SystemProcess = 0,

    /**
     * 创建时
     */
    CreatingTime = 1,

    /**
     * 保存时
     */
    SavingTime = 2,

    /**
     * 创建和保存时
     */
    BothCreatingAndSaving = 3,
}

export { GSPBillCodeGenerateOccasion }
