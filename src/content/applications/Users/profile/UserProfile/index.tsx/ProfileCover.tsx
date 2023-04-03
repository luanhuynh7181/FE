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
import { setUserInfo, initialState, UserInfo } from 'src/data/ReduxSplice/UserInfoSplice';
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
  const [userInfo, setUerInfo] = useState<UserInfo>(initialState);
  const dispatch = useDispatch();
  const onKeyPressed = event => {
    if (event.key === 'Enter') {
      console.log("searchUserById", uid)
      homeService.searchUserById(uid).then(response => {
        let data: UserInfo = { ...initialState, ...response };
        dispatch(setUserInfo(data));
        setUerInfo(data);
      }).catch(err => {
        alert("Not found")
      });

    }
  }
  function getGoldFormat(userInfo: UserInfo): string {
    if (userInfo && userInfo.gold > 9999) {
      let gold = userInfo.gold;
      return "(" + MoneyUtils.formatAlignNumber(gold) + ")";
    }
  }
  let goldFormat = getGoldFormat(userInfo);
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
              <Typography variant="h4" component="h1" gutterBottom>Display name :{userInfo.displayName}</Typography>
              <Typography variant="h5" component="h3" gutterBottom>Uid:{userInfo.uniqueID} </Typography>
              <Typography variant="h5" component="h3" color={"gray"} gutterBottom>User Name:{userInfo.username}</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={2.8}>
            <Stack direction="row" spacing={2}>
              <img object-fit="contain" width="30px" height="32px" src="/static/images/icon/gold.png" />

              <Typography variant="h3" component="h6" >  {userInfo.gold}</Typography>
              {goldFormat && <Typography variant="h3" component="h6" color={"navy"} > {goldFormat}</Typography>}
            </Stack  >
            <Stack direction="row" spacing={2}>
              <img object-fit="contain" width="35px" height="33px" src="/static/images/icon/diamond.png" />
              <Typography variant="h3" component="h6" >{userInfo.diamond}</Typography>
            </Stack  >
            <Stack direction="row" spacing={2}>
              <img object-fit="contain" width="35px" height="32px" src="/static/images/icon/vpoint.png" />
              <Typography variant="h3" component="h6" >{userInfo.vipPoint}</Typography>
            </Stack  >
            <Stack spacing={1.5}>
              <Typography variant="h4" component="h6" >level: &nbsp;{userInfo.level}</Typography>
              <Typography variant="h4" component="h6" >VipLevel: &nbsp;{userInfo.vipLevel}</Typography>
              <Typography variant="h4" component="h6" >nPay:&nbsp;{userInfo.nPaying}</Typography>
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
