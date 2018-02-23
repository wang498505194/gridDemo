import { IGSPCommonElement } from "../Interface/IGSPCommonElement";
import { ElementPathGenerateType } from "../Element/ElementPathGenerateType";

/**
 * 分级信息
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * 分级信息
 */
export class GSPHirarchyInfo {

    /**
     * 分级码
     */
    public PathElement: IGSPCommonElement;

    /**
     * 分级码步长
     */
    public PathLength: number;

    /**
     * 级数
     */
    public LayerElement: IGSPCommonElement;

    /**
     * 是否明细
     */
    public IsDetailElement: IGSPCommonElement;

    /**
     * 父路径
     */
    public ParentElement: IGSPCommonElement;

    /**
     * 分级信息生成时机
     */
    public PathGenerateType: ElementPathGenerateType;
}