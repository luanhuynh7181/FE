import * as _ from 'lodash';
const Util = {



    apiFunction(input) {
        if (_.size(input + "") != 10) return input; // todo hardcode
        var date = new Date(input * 1000 + 7 * 3600 * 1000);
        return date.toUTCString() + " - (" + input + " )";
        // return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " ( " + input + " )";
    },

    getTime(value) {
        let time = new Date(value);
        if (time.getTime() <= 0) {
            return "";
        }
        return time.toLocaleTimeString() + ' - ' + time.toLocaleDateString();
    },

    TIME_FORMAT: {
        DD_HH: "DD@dHH@h",             // ex: 2d12h
        DD_HH_MM: "DD@dHH@hMM@m",         // ex: 2d12h30m
        DD_HH_MM_SS: "DD@dHH@hMM@mSS@s",     // ex: 2d12h30m16s

        HH_MM: "HH@hMM@m",             // ex: 12h30m
        HH_MM_SS: "HH@hMM@mSS@s",         // ex: 12h30m16s
        MM_SS: "MM@mSS@s"              // ex: 12m30s
    },

    timeToString(time, outputFormat, hideZero, useDoubleZero, maxNumOfUnits, isExplicit, isHidePrefixTime) {
        time = Math.max(time, 0);

        if (hideZero === undefined || hideZero === null) {
            hideZero = true;
        }

        if (useDoubleZero === undefined || useDoubleZero === null) {
            useDoubleZero = true;
        }

        if (outputFormat === undefined || outputFormat === null) {
            outputFormat = this.TIME_FORMAT.DD_HH_MM_SS;
        }

        if (maxNumOfUnits === undefined || maxNumOfUnits === null) {
            maxNumOfUnits = 4;
        }

        if (isExplicit === undefined || isExplicit === null) {
            isExplicit = false;
        }
        if (isHidePrefixTime === undefined || isHidePrefixTime === null) {
            isHidePrefixTime = false;
        }

        var numOfUnits = 0;
        var remainTime = time;
        var ddStr, hhStr, mmStr, ssStr;
        var dd = ddStr = Math.floor(remainTime / 86400);
        remainTime -= dd * 86400;
        var hh = hhStr = Math.floor(remainTime / 3600);
        remainTime -= hh * 3600;
        var mm = mmStr = Math.floor(remainTime / 60);
        remainTime -= mm * 60;
        var ss = ssStr = Math.floor(remainTime);
        if (dd > 0 && outputFormat.indexOf("DD") == -1) {
            hh += 24 * dd;
            hhStr = hh;
        }

        //var timeString = "";
        if (useDoubleZero) {
            if (dd < 10) ddStr = "0" + dd;
            if (hh < 10) hhStr = "0" + hh;
            if (mm < 10) mmStr = "0" + mm;
            if (ss < 10) ssStr = "0" + ss;
        }

        if (hideZero) {
            if (dd == 0) {
                outputFormat = outputFormat.replace("DD", "");
                outputFormat = outputFormat.replace("@d", "");
            }

            if (hh == 0) {
                outputFormat = outputFormat.replace("HH", "");
                outputFormat = outputFormat.replace("@h", "");
            }

            if (mm == 0) {
                outputFormat = outputFormat.replace("MM", "");
                outputFormat = outputFormat.replace("@m", "");
            }

            if (ss == 0) {
                outputFormat = outputFormat.replace("SS", "");
                outputFormat = outputFormat.replace("@s", "");
            }
        }

        var separator = " ";
        if (isHidePrefixTime) {
            separator = "";
        }
        if ((dd > 0 || !hideZero) && numOfUnits < maxNumOfUnits && _.includes(outputFormat, "DD")) {
            outputFormat = outputFormat.replace("DD", (numOfUnits === 0 ? "" : separator) + ddStr);
            ++numOfUnits;
        } else {
            outputFormat = outputFormat.replace("DD", "");
            outputFormat = outputFormat.replace("@d", "");
        }

        if ((hh > 0 || !hideZero) && numOfUnits < maxNumOfUnits && _.includes(outputFormat, "HH")) {
            outputFormat = outputFormat.replace("HH", (numOfUnits === 0 ? "" : separator) + hhStr);
            ++numOfUnits;
        } else {
            outputFormat = outputFormat.replace("HH", "");
            outputFormat = outputFormat.replace("@h", "");
        }

        if ((mm > 0 || !hideZero) && numOfUnits < maxNumOfUnits && _.includes(outputFormat, "MM")) {
            outputFormat = outputFormat.replace("MM", (numOfUnits === 0 ? "" : separator) + mmStr);
            ++numOfUnits;
        } else {
            outputFormat = outputFormat.replace("MM", "");
            outputFormat = outputFormat.replace("@m", "");
        }
        if ((ss > 0 || !hideZero) && numOfUnits < maxNumOfUnits && _.includes(outputFormat, "SS")) {
            outputFormat = outputFormat.replace("SS", (numOfUnits === 0 ? "" : separator) + ssStr);
            ++numOfUnits;
        } else {
            outputFormat = outputFormat.replace("SS", "");
            outputFormat = outputFormat.replace("@s", "");
        }

        if (isHidePrefixTime) {
            var s = '';
            var m = ':';
            var h = ':';
            if (outputFormat.indexOf("@s") === (outputFormat.length - 2)) {
                s = ''
            }
            if (outputFormat.indexOf("@m") === (outputFormat.length - 2)) {
                m = ''
            }
            if (outputFormat.indexOf("@h") === (outputFormat.length - 2)) {
                h = ''
            }
            outputFormat = outputFormat
                .replace("@h", h)
                .replace("@m", m)
                .replace("@s", s);
        }

        if (isExplicit) {
            outputFormat = outputFormat
                .replace("@d", ' ' + "Day(s)".replace("(s)", dd > 1 ? "s" : ""))
                .replace("@h", ' ' + "Hour(s)".replace("(s)", hh > 1 ? "s" : ""))
                .replace("@m", ' ' + "Minute(s)".replace("(s)", mm > 1 ? "s" : ""))
                .replace("@s", ' ' + "Seconds".replace("(s)", ss > 1 ? "s" : ""))
                ;
        }

        return outputFormat.replace(/@/g, ""); // replace all @
    }
};

export default Util;
