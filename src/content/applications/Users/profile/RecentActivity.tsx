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
const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(7)};
      height: ${theme.spacing(7)};
`
);
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
    <Card style={{ backgroundColor: "white" }}>
      <Typography pt={1} pl={1} variant="h3" component="h3" gutterBottom>
        Player Model
      </Typography>
      <Box sx={{ width: 1 }} display="flex" alignItems="flex-start" />
      <TextField sx={{ width: 1 }}
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
