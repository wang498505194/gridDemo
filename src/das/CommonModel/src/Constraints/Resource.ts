import { ResourceType } from "./ResourceType";

/**
 * 约束信息
 * @author wangjiegj<wangjiegj@inspur.com>
 */

 
/**
 * 约束信息
 */
export abstract class Resource {

    /**
     * 资源内码，唯一标识
     */
    public ID: string;

    /**
     * 资源类型
     */
    public abstract Type: ResourceType;
}