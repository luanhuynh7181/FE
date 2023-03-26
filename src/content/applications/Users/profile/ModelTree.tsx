
import TreeItem from '@mui/lab/TreeItem';
import { Props } from 'react-apexcharts';
import { FC } from 'react';


interface ModelTreeProps {
    model?: Object;
    modelName: string
}
const ModelTree: FC<ModelTreeProps> = ({ model, modelName }) => {


    const createTreeArray = (key: string, arr: Array<any>) => {
        return {}
    }




    const createTreeObject = (key: string, obj: Object) => {
        console.log("obj: ", key, JSON.stringify(obj))
        return (
            <TreeItem nodeId="-1" key={key} label={key.toString()} >
                {
                    Object.keys(obj).map((k, v) => {
                        // if (Array.isArray(v)) {
                        //     return createTreeArray(k, obj[k])
                        // }
                        // if (typeof v === "object") {
                        //     return createTreeObject(k, obj[k])
                        // }
                        <TreeItem nodeId="-1" key={k} label={k + ":" + v.toString()} />
                    })
                }
            </TreeItem>

        )

    }

    return (
        <>
            {createTreeObject(modelName, model)}</>
    );
};


export default ModelTree;
