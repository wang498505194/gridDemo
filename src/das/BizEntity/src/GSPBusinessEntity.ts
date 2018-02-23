import { GSPCommonModel } from "../../CommonModel/index";
import { BECategory } from "./Enum/BECategory";
import { GSPDataLockType } from "./Enum/GSPDataLockType";
import { GSPBizEntityObject } from "./GSPBizEntityObject";


/**
* BE元数据实体类
* @author wangjiegj<wangjiegj@inspur.com>
 */


/**
* BE元数据实体类
*/
export class GSPBusinessEntity extends GSPCommonModel {

    /**
     * BE实体类型
     */
    Category: BECategory;

    /**
     * 派生，扩展关系的来源BE实体
     */
    SourceEntity: GSPBusinessEntity;

    /**
     * BE根节点
     */
    MainObject: GSPBizEntityObject;

    /**
     * 实体数据加锁类型
     * 此属性影响到实体使用乐观锁或者悲观锁控制数据并发
     *  默认为悲观锁，保证更好的数据一致性，同时可以提升用户体验。必须显式加锁才能编辑数据
     */
    DataLockType: GSPDataLockType;

    /**
     * 扩展类型
     */
    get ExtendType(){
        return "GSPBusinessEntity";
    }
}
