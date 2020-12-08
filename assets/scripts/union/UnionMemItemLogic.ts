// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import LoginCommand from "../login/LoginCommand";
import { Role } from "../login/LoginProxy";
import UnionCommand from "./UnionCommand";
import { Member, Union } from "./UnionProxy";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UnionMemItemLogic extends cc.Component {


    @property(cc.Label)
    nameLabel: cc.Label = null;

    protected _menberData:Member = null;

    protected onLoad():void{
    }

    protected updateItem(data:Member):void{
        this._menberData = data;
        this.nameLabel.string = "(" + this._menberData.titleDes + ")  " + this._menberData.name;


    }

}