import PropTypes from 'prop-types';
import {
  Typography,
  Card,
  Avatar,
  TextField,
  Stack,
  Divider,
  Button,
  InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import homeService from 'src/services/home.service';
import { setUserInfo, initialState } from 'src/data/ReduxSplice/UserInfoSplice';
import { useDispatch } from 'react-redux';
import { MoneyUtils } from '../../../../../../Utils/MoneyUtils';

const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
  background: ${theme.colors.alpha.white[100]};

  .MuiInputBase-input {
      font-size: ${theme.typography.pxToRem(17)};
  }
`
);

const ProfileCover = ({ user }) => {
  const [uid, setUid] = useState<string>("")
  const [userInfo, setUerInfo] = useState<Object>({});
  const dispatch = useDispatch();
  const onKeyPressed = event => {
    if (event.key === 'Enter') {
      homeService.searchUserById(uid).then(response => {
        dispatch(setUserInfo({ ...initialState, response }));

      }).catch(err => {
        setUerInfo({
          gold: 213213213213,
          name: "luan",
          username: "asdasd",
          uid: 12121,
          vip: 3,
          level: 3,
          diamond: 32,
          vpoint: 34,
          npay: 3

        })
      });

    }
  }
  if (userInfo && userInfo["gold"] > 9999) {
    let gold = userInfo["gold"];
    userInfo["goldFormat"] = "(" + MoneyUtils.formatAlignNumber(gold) + ")";
  }
  return (
    <>
      <Card style={{ backgroundColor: "white", padding: "18px" }} >

        <Stack direction="column" spacing={3}>
          <SearchInputWrapper
            sx={{ pl: 0, pr: 0 }}
            value={uid}
            autoFocus={true}
            onKeyPress={onKeyPressed}
            onChange={(event) => {
              setUid(event.target.value);
            }}
            InputProps={{ startAdornment: (<InputAdornment position="start">   <SearchTwoToneIcon />  </InputAdornment>) }}
            placeholder="Search user Id ..."
            fullWidth
            label="Search"
          />
          <Stack direction="row" spacing={3}>
            <Avatar style={{ borderRadius: 75 }} sx={{ width: 150, height: 150 }} variant="rounded" alt={user.name} src={user.avatar} />
            <Stack justifyContent="center" spacing={1} >
              <Typography variant="h4" component="h1" gutterBottom>Display name :{userInfo["name"] || ""}</Typography>
              <Typography variant="h5" component="h3" gutterBottom>Uid:{userInfo["uid"] || ""} </Typography>
              <Typography variant="h5" component="h3" color={"gray"} gutterBottom>User Name:{userInfo["username"] || ""}</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={2.8}>
            <Stack direction="row" spacing={2}>
              <img object-fit="contain" width="30px" height="32px" src="/static/images/icon/gold.png" />

              <Typography variant="h3" component="h6" >  {userInfo["gold"] || 0}</Typography>
              {userInfo["goldFormat"] && <Typography variant="h3" component="h6" color={"navy"} > {userInfo["goldFormat"] || ""}</Typography>}
            </Stack  >
            <Stack direction="row" spacing={2}>
              <img object-fit="contain" width="35px" height="33px" src="/static/images/icon/diamond.png" />
              <Typography variant="h3" component="h6" >{userInfo["diamond"] || ""}</Typography>
            </Stack  >
            <Stack direction="row" spacing={2}>
              <img object-fit="contain" width="35px" height="32px" src="/static/images/icon/vpoint.png" />
              <Typography variant="h3" component="h6" >{userInfo["vpoint"] || 0}</Typography>
            </Stack  >
            <Stack spacing={1.5}>
              <Typography variant="h4" component="h6" >level: &nbsp;{userInfo["level"] || 0}</Typography>
              <Typography variant="h4" component="h6" >VipLevel: &nbsp;{userInfo["vip"] || 0}</Typography>
              <Typography variant="h4" component="h6" >nPay:&nbsp;{userInfo["npay"] || 0}</Typography>
            </Stack>
          </Stack>
          <Button style={{ backgroundColor: "red", padding: "5px 2px", fontSize: "25px" }} variant="contained" >Kick user</Button>
        </Stack>
      </Card >
    </>
  );
};

ProfileCover.propTypes = {
  // @ts-ignore
  user: PropTypes.object.isRequired
};

export default ProfileCover;
