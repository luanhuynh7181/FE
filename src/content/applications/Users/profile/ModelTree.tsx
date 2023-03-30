
import {
    Box,
    Typography,
    Card,
    CardHeader,
    Divider,
    Avatar,
    useTheme,
    styled,
    TextField,
    Button
} from '@mui/material';
import ReactJson from 'react-json-view'
import { FC, useEffect } from 'react';
import { useState } from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { useSelector, useDispatch } from 'react-redux';
import { setModelUser, selectUserData, UserModelDao } from 'src/data/UserModelDaoSplice';
import homeService from 'src/services/home.service';
interface ModelTreeProps {
    model?: Object;
}
const ModelTree: FC<ModelTreeProps> = () => {
    const userModelDao: UserModelDao = useSelector(selectUserData);


    const convertToDate = (value: number) => {
        let org = value;
        if (value < 120000000000) { //12B
            value *= 1000;
        }
        let date = new Date();
        date.setTime(value);
        return date;
    }
    const getNewValue = (key: any, value: any) => {
        const keyString: string = (key + "").toLowerCase();
        if (keyString.indexOf("time") != -1) {
            return convertToDate(parseInt(value));
        }
        return value;
    }
    const leafTraverseArray = (arr: any[]) => {
        arr.map((value, idx) => {
            let newValue = getNewValue(idx, value);
            if (newValue != value) {
                arr[idx] = newValue;
            }
            if (Array.isArray(newValue)) {
                leafTraverseArray(newValue);
            } else if (typeof newValue === "object") {
                leafTraverseObject(newValue);
            }

        })
    }
    const leafTraverseObject = (obj: Object) => {
        if (obj === null) return {};
        Object.keys(obj).map((key) => {
            let value = obj[key];
            let newValue = getNewValue(key, value);
            if (newValue != value) {
                obj[key] = newValue;
            }
            if (Array.isArray(newValue)) {
                leafTraverseArray(newValue);
            } else if (typeof newValue === "object") {
                leafTraverseObject(newValue);
            }

        })
    }
    leafTraverseObject(userModelDao);
    console.log("sadas", JSON.stringify(userModelDao))
    return (
        <>
            <ReactJson
                src={userModelDao} style={{ fontSize: 20, backgroundColor: 'white' }}
                theme="summerfruit:inverted"
                displayDataTypes={false}
                enableClipboard={false}
                displayObjectSize={false}
                indentWidth={4}
            />
        </>

    );
};


export default ModelTree;
