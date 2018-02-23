import { MappingType } from "../Enum/MappingType";


/**
 * VO映射接口
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * VO映射接口
 */
export class ViewModelMapping {

    /**
     * 映射类型
     */
    public MapType: MappingType;

    /**
     * 映射的对方元数据ContentId，用于唯一确定元数据
     */
    public TargetMetadataId: string;

    /**
     * 映射的元素ID，用于确定具体的元数据成员
     */
    public TargetObjId: string;

}
