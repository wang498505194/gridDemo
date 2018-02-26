/**
 * 权限控制类型
 * @author wangjiegj<wangjiegj@inspur.com>
 */

/**
 * 权限控制类型
 * 控制当前操作使用的权限控制策略
 */
enum ElementHelpType {
    /**
     * 使用传递的权限，不限制权限，Action没有绑定的业务操作
     */
    TransAuth = 0,
        
    /**
     * 使用传递的权限，并且限制在Action所绑定的业务操作内
     */
    TransAndInsideAuth = 1,

    /**
     * 不使用传递的权限，使用Action绑定的业务操作（只绑定一个业务操作）
     */
    MustHasAuth = 2

}

export{ElementHelpType}