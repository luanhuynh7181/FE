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
import { modelSearch } from 'src/data/modelsearch';
import homeService from 'src/services/home.service';
import { useDispatch } from 'react-redux';
import { setModelUser } from 'src/data/UserModelDaoSplice';
import { initialState } from '../../../../data/UserModelDaoSplice';
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
        return modelSearch.filter(
            (model) =>
                model.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
    }

    const dispatch = useDispatch();
    const searchModel = (modelName) => {
        console.log("modelsearch", modelName)
        setOpen(false);
        homeService.searchModel(modelName).then(response => {
            dispatch(setModelUser({ ...initialState, ...response }));
        }).catch(err => {
            dispatch(setModelUser({ ...initialState, model: "null" + err }));
        });

    }
    const onclickButton = event => {
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
            <Tooltip arrow title="Search">
                <IconButton color="primary" onClick={handleClickOpen}>
                    <SearchTwoToneIcon />
                </IconButton>
            </Tooltip>
            <DialogWrapper
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                maxWidth="sm"
                fullWidth
                scroll="paper"
                onClose={handleClose}
            >
                <DialogTitleWrapper>
                    <SearchInputWrapper
                        value={searchValue}
                        autoFocus={true}
                        onChange={handleSearchChange}
                        onKeyPress={onclickButton}
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
                <Divider />
                <DialogContent>
                    {
                        filterSearch.map((modelName) => (
                            <List disablePadding key={modelName}>
                                <ListItem >
                                    <Button value={modelName} fullWidth style={{ justifyContent: "flex-start" }} variant="text" onClick={onclickItem}>
                                        {modelName}
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                            </List>
                        ))
                    }
                </DialogContent>
            </DialogWrapper>
        </>
    );
}

export default SearchModel;
