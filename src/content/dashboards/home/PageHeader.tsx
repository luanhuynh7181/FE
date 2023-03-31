import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { UserAdminData } from '../../../data/ReduxSplice/UserAdminDataSplice';
import { Utility } from '../../../Utils/Utility';

function PageHeader() {
  const theme = useTheme();
  let user: UserAdminData = Utility.getUserDataLogin();
  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={"/static/images/avatars/1.jpg"}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="subtitle2">
          {user.email}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
