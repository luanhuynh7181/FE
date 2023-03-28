
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
import { FC } from 'react';
import { useState } from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

interface ModelTreeProps {
    model?: Object;
}
const ModelTree: FC<ModelTreeProps> = ({ model }) => {
    return (
        <>
            <ReactJson
                src={model} style={{ fontSize: 20, backgroundColor: 'white' }}
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
