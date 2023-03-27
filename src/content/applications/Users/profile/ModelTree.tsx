
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

import { FC } from 'react';
import { useState } from 'react';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
interface ModelTreeProps {
    model?: Object;
    modelName: string
}
const ModelTree: FC<ModelTreeProps> = ({ model, modelName }) => {
    const [expanded, setExpanded] = useState<string[]>([]);
    const [arrExpend, setArrExpend] = useState<string[]>([]);
    const [id, setId] = useState<number>(1);
    const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
        setExpanded(nodeIds);
    };



    const handleExpandClick = () => {
        setExpanded((oldExpanded) => {
            if (oldExpanded.length === 0) return arrExpend
            setArrExpend([])
            return []
        }
        );

    };

    const getNewId = () => {
        let oldId = id;
        setId(oldId + 1);
        return oldId;
    }

    const addToExpand = (id) => { }   // setArrExpend(oldExpanded => [...oldExpanded, id])}
    console.log("reload")
    const createTreeArray = (key: string, arr: Array<any>) => {
        // let idExpend = getNewId();
        // addToExpand(idExpend);
        return (
            <TreeItem nodeId={key + ""} key={key + ""} label={key.toString() + ":[]"} >
                {
                    arr.map((data, idx) => {
                        if (Array.isArray(data)) {
                            return createTreeArray(idx + "", data)
                        }
                        if (typeof data === "object") {
                            return createTreeObject(idx + "", data)
                        }
                        // let idExpend = getNewId();
                        return (<TreeItem nodeId={idx + ""} key={idx + ""} label={idx + ":" + data} />)
                    })
                }
            </TreeItem>

        )
    }




    const createTreeObject = (key: string, obj: Object) => {
        // let idExpend = getNewId();
        // addToExpand(idExpend);
        return (
            <TreeItem nodeId={key + ""} key={key + ""} label={key.toString() + ":"} >

                {
                    Object.keys(obj).map((k, v) => {
                        let data = obj[k];
                        if (Array.isArray(data)) {
                            return createTreeArray(k, data)
                        }
                        if (typeof data === "object") {
                            return createTreeObject(k, data)
                        }
                        // let idExpend = getNewId();
                        return (<TreeItem nodeId={k + ""} key={k + ""} label={k + ":" + data} />)
                    })
                }
            </TreeItem>

        )

    }

    return (
        <>
            <Box sx={{ mb: 1 }}>
                <Button onClick={handleExpandClick}>
                    {'Collapse all'}
                </Button>
            </Box>
            <TreeView
                aria-label="controlled"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                expanded={expanded}
                onNodeToggle={handleToggle}
                multiSelect
            >
                {createTreeObject(modelName, model)}
            </TreeView></>

    );
};


export default ModelTree;
