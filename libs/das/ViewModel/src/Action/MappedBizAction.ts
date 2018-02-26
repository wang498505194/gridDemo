import { ViewModelAction } from "./ViewModelAction";
import { ViewModelActionType } from "../Enum/ViewModelActionType";

/**
 * VM上映射的BE操作类
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * VM上映射的BE操作类
 */
export class MappedBizAction extends ViewModelAction {

    /**
     * 类型
     */
    get Type() {
        return ViewModelActionType.BEAction;
    }
}