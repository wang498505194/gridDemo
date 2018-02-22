import { HirarchyInfo } from "./HirarchyInfo";
import { GSPAssociationKey } from "./GSPAssociationKey";
import { GSPCommonElement } from "./GSPCommonElement";

export class GSPCommonObject {
    public Code: string;
    public Name: string;
    public HirarchyInfo:HirarchyInfo;
    public Keys:GSPAssociationKey[];
    public ContainElements:GSPCommonElement[];
    public ContainChildObjects:GSPCommonObject[];
}