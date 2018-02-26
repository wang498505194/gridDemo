/**
 * 数据对象
 */
export class UserModel {

    /**
     * 编号
     */
    // public ID="默认ID";

    get ID()
    {
        return this.ID;
    }
    set ID(value:any)
    {
        if(value=undefined)
        {
            this.ID='默认ID';
        }
        else
        {
            this.ID=value;
        }
        
    }

    /**
     * 编号
     */
    public Code: string;

    /**
     * 名称
     */
    public Name: string;
}