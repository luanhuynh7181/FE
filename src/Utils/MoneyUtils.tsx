/* eslint-disable */
/**
 * Created by KienVN on 10/19/2015.
 */

import * as _ from "lodash";
export const MoneyUtils = {
    formatAlignNumber: function (number = 0, separator = "/", isFull = false, maxLength = 6) {
        let isNegative = number < 0;
        number = Math.abs(Math.round(number));
        let numString = number.toString();
        let insertAt = function (str: string, index: number, subStr: string): string {
            if (index > 0) {
                return str.substring(0, index) + subStr + str.substring(index);
            } else {
                return subStr + str;
            }
        }
        if (isFull) {
            let curIndex = numString.length - 3;
            while (curIndex > 0) {
                numString = insertAt(numString, curIndex, separator);
                curIndex -= 3;
            }
        }
        else {
            let prefix = ["", "K", "M", "B"];
            let fixed = [0, 2, 2, 2];
            let inx = 0;
            while (inx < prefix.length - 1) {
                if (_.round(number, fixed[inx]) < 1000.0) break;
                number = number / 1000.0;
                inx++;
            }
            let fixedValue = fixed[inx];
            do {
                numString = _.round(number, fixedValue--) + "";
            } while (numString.length >= maxLength && fixedValue >= 0);
            numString = numString + prefix[inx];
        }

        if (isNegative) {
            numString = "-" + numString;
        }

        //ZLog.debug("num String = %s", numString);
        return numString;
    },

    formatMoney: function (money, unit, separator) {
        if (unit === undefined) unit = "$";
        return unit + this.formatAlignNumber(money, separator);
    },

    formatMoneyFull: function (money, unit, separator) {
        if (unit === undefined) unit = "$ ";
        return unit + this.formatAlignNumber(money, separator, true);
    }
};


