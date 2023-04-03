/* eslint-disable */
/**
 * Created by KienVN on 10/19/2015.
 */

import * as _ from "lodash";
import { UserData, UserDataKey } from 'src/UserData';
import { UserAdminData } from '../data/ReduxSplice/UserAdminDataSplice';
export const Utility = {
    getUserDataLogin: function (): UserAdminData {
        return UserData.getObject(UserDataKey.USER_DATA_LOGIN);
    },

}

