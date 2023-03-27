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



import ModelTree from './ModelTree';

let userModel = {
  userId: 111,
  name: "luanhuynh",
  listGold: [1000, 2000, 300],
  listModel: {
    model: ["model1", "mode2", {
      "name": "mode3",
      "value": 4
    }]
  }

}
function RecentActivity() {
  const theme = useTheme();



  return (
    <Card style={{ backgroundColor: "white", padding: "10px", paddingTop: "13px", }} >
      <Typography pt={1} pl={1} variant="h3" component="h3" gutterBottom>
        Player Model
      </Typography>
      <Box sx={{ width: 1 }} display="flex" alignItems="flex-start" />
      <TextField sx={{ width: 1, mr: 3 }}
        id="outlined-search"
        label="Search model"
        type="search"
      />
      <Divider />
      <Box sx={{ height: 600, width: 1, overflowY: 'auto' }}>

        <ModelTree model={userModel} modelName={"userModel"} />
      </Box>
    </Card>
  );
}

export default RecentActivity;
