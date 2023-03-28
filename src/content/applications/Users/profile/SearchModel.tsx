import { forwardRef, Ref, useState, ReactElement, ChangeEvent } from 'react';
import {
    Divider,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    TextField,
    Tooltip,
    Typography,
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { modelSearch } from 'src/data/modelsearch';
const Transition = forwardRef(function Transition(
    props: TransitionProps & { children: ReactElement<any, any> },
    ref: Ref<unknown>
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
    () => `
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`
);

const SearchInputWrapper = styled(TextField)(
    ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};

    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(17)};
    }
`
);

const useStyles = makeStyles({
    dialog: {
        position: 'absolute',
        left: 10,
        top: 50
    }
});
const DialogTitleWrapper = styled(DialogTitle)(
    ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(3)}
`
);

const SearchModel: FC<{}> = ({ }) => {
    const [filterSearch, setFilterSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    // const [searchValue, setSearchValue] = useState('');
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
        setFilterSearch(filteredModel(event.target.value))
    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const filteredModel = (searchValue: string) => {
        return modelSearch.filter(
            (model) =>
                model.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        );
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
                TransitionComponent={Transition}
                keepMounted
                maxWidth="md"
                fullWidth
                scroll="paper"
                onClose={handleClose}
            >

                <DialogTitleWrapper>
                    <SearchInputWrapper
                        value={searchValue}
                        autoFocus={true}
                        onChange={handleSearchChange}
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
                                    <Typography>
                                        {modelName}
                                    </Typography>
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
