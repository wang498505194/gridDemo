import { GSPCommonModel } from "../../CommonModel/index";
import { ViewModelMapping } from "./Common/ViewModelMapping";
import { GSPViewObject } from "./GSPViewObject";
import { ValueHelpConfig } from "./Common/ValueHelpConfig";

/**
 * 视图对象类
 * @author wangjiegj<wangjiegj@inspur.com>
 */


/**
 * 视图对象类
 */
export class GSPViewModel extends GSPCommonModel {

    /**
     * 描述
     */
    Description: string;

    /**
     * 模型映射：VM可以通过映射规则映射到BE或者其他数据源上
     */
    Mapping: ViewModelMapping;

    /**
     * BE根节点
     */
    MainObject: GSPViewObject;

    /**
     * 值帮助配置集合
     */
    ValueHelpConfigs: ValueHelpConfig[];

    /**
     * 获取扩展类型,总是返回为"视图模型"类型
     */
    get ExtendType(){
        return "GSPViewModel";
    }
}
