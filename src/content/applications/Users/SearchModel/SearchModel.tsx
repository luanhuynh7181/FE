import { useState, ChangeEvent } from 'react';
import {
    Divider,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    Tooltip,
    DialogContent,
    Button,
} from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { FC } from 'react';
import { ModelUser } from 'src/data/ModelUser';
import homeService from 'src/services/home.service';
import { useDispatch } from 'react-redux';
import { setModelUser } from 'src/data/ReduxSplice/UserModelDaoSplice';
import { initialState } from '../../../../data/ReduxSplice/UserModelDaoSplice';
import { Transition, DialogWrapper, SearchInputWrapper, DialogTitleWrapper } from './Styled';
const SearchModel: FC<{}> = ({ }) => {
    const [filterSearch, setFilterSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
        setFilterSearch(filteredModel(event.target.value))
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setSearchValue('');
        setFilterSearch([])
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const filteredModel = (searchValue: string) => {
        if (searchValue == '') return [];
        return ModelUser.filter(
            (model) =>
                model.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
    }

    const dispatch = useDispatch();
    const searchModel = (modelName) => {
        setOpen(false);
        setFilterSearch([])
        homeService.searchModel(modelName).then(response => {
            console.log("rees", response)
            // dispatch(setModelUser({ ...initialState, ...response }));
        }).catch(err => {
            dispatch(setModelUser({ ...initialState, model: "null" + err }));
        });

    }
    const onKeyPressed = event => {
        if (event.key === 'Enter') {
            searchModel(searchValue);
        }
    }
    const onclickItem = (e) => {
        setOpen(false);
        searchModel(e.target.value);
    }

    return (
        <>
            <div>
                <DialogTitleWrapper>

                    <SearchInputWrapper
                        value={searchValue}
                        autoFocus={true}
                        onChange={handleSearchChange}
                        onKeyPress={onKeyPressed}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchTwoToneIcon />
                                </InputAdornment>
                            )
                        }}
                        placeholder="Search model here..."
                        fullWidth
                        label="Search"
                    />

                </DialogTitleWrapper>
            </div>
            <DialogContent style={filterSearch.length > 0 ? { backgroundColor: "#c9c3c3", borderRadius: 13 } : {}} >
                {

                    filterSearch.map((modelName, idx) => (
                        <List disablePadding key={modelName}>
                            <ListItem >
                                <Button value={modelName} fullWidth style={{ justifyContent: "flex-start", color: "black" }} variant="text" onClick={onclickItem}>
                                    {modelName + idx}
                                </Button>
                            </ListItem>
                            {idx < filterSearch.length && <Divider component="li" />}
                        </List>
                    ))
                }
            </DialogContent>
        </>
    );
}

export default SearchModel;
