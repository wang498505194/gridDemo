import { ViewModelAction } from "./ViewModelAction";
import { ViewModelActionType } from "../Enum/ViewModelActionType";

/**
 * VO上映射的构件操作类
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * VO上映射的构件操作类
 */
export class MappedCdpAction extends ViewModelAction {

    /**
     * 方法Id
     */
    public MethodId: string;

    /**
     * 对应构件实体Id
     */
    public ComponentEntityId: string;

    /**
     * 类型
     */
    get Type() {
        return ViewModelActionType.VMAction;
    }
}