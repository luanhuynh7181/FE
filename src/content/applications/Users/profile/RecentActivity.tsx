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
import ModelTree from './ModelTree';
import SearchModel from './SearchModel';
let userModel = {
  userId: 111,
  timeStart: 1678665600,
  name: "luanhuynh",
  is: true,
  listGold: [1000, 2000, 300],
  listModel: {
    model: ["model1", "mode2", {
      "name": "mode22222222223",
      "value": 4,
      timeStart: 1678665600,
      timeSt2art: 1678665600000,
      timeSt2ar3t: 1678665600000,
    }]
  }

}

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
        <ModelTree model={userModel} />
      </Box>
    </Card>
  );
}

export default RecentActivity;
