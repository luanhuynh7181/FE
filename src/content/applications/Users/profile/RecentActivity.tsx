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
  Button,
  IconButton
} from '@mui/material';
import HeaderSearch from 'src/layouts/SidebarLayout/Header/Buttons/Search';
import ReactJson from 'react-json-view'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ModelTree from '../SearchModel/ModelTree';
import SearchModel from '../SearchModel';

function RecentActivity() {
  const theme = useTheme();


  const getBoxSize = () => {
    return 590;
  }

  return (
    <Card style={{ backgroundColor: "white", padding: "10px", paddingTop: "13px", }} >
      <Typography pt={1} pl={1} variant="h3" component="h3" gutterBottom>
        Player Model  <SearchModel />
      </Typography>

      <Box sx={{ width: 1 }} display="flex" alignItems="flex-start" />
      {/* 
      <TextField sx={{ width: 1, mr: 3, mt: 1 }}
        id="outlined-search"
        label="Search model"
        type="search"
      /> */}
      {/* <HeaderSearch /> */}
      <Divider />
      <Box sx={{ pt: 1, height: getBoxSize(), width: 1, overflowY: 'auto' }}>
        <ModelTree />
      </Box>
    </Card>
  );
}

export default RecentActivity;
