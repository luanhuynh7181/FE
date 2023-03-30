/* eslint-disable */
/**
 * Created by KienVN on 10/19/2015.
 */
import * as _ from "lodash";
export const UserDataKey = {
    USER_DATA_LOGIN: "USER_DATA_LOGIN"
};



export class _UserData {
    private static _instance = new _UserData();
    private constructor() {

    }

    public setObject(key: string = "", obj: any = {}): void {
        let objStr: string = JSON.stringify(obj);
        localStorage.setItem(key, objStr);
    }


    public getObject(key: string = "", defaultValue: any = {}): any {
        let objStr: string = localStorage.getItem(key);
        let obj: Object = JSON.parse(objStr)
        return (!obj || _.isEmpty(obj)) ? defaultValue : obj;
    }

    static get instance() {
        return this._instance;
    }

}

export const UserData = _UserData.instance;