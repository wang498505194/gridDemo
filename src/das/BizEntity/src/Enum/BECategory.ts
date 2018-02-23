/**
* BE 实体类型
* @author wangjiegj<wangjiegj@inspur.com>
 */

 /**
* BE 实体类型
 */
enum BECategory {
    /**
     * 标准BE
     */
    Standard = 0,
        
    /**
     * DBO,用于元数据重用的嵌入式BE,需要依赖HO存在
     */
    DependentBusinessObject = 1,

    /**
     * 若干BE的公共部分抽象的大集合
     */
    MaxBusinessObject = 2,

}

export{BECategory}