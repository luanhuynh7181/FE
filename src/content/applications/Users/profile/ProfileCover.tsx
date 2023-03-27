import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Card,
  Tooltip,
  Avatar,
  CardMedia,
  Button,
  IconButton,
  TextField,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';

import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import UploadTwoToneIcon from '@mui/icons-material/UploadTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { useState } from 'react';

const Input = styled('input')({
  display: 'none'
});

const AvatarWrapper = styled(Card)(
  ({ theme }) => `

    position: relative;
    overflow: visible;
    display: inline-block;
    margin-top: -${theme.spacing(9)};
    margin-left: ${theme.spacing(2)};

    .MuiAvatar-root {
      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};
    }
`
);

const ButtonUploadWrapper = styled(Box)(
  ({ theme }) => `
    position: absolute;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    bottom: -${theme.spacing(1)};
    right: -${theme.spacing(1)};

    .MuiIconButton-root {
      border-radius: 100%;
      background: ${theme.colors.primary.main};
      color: ${theme.palette.primary.contrastText};
      box-shadow: ${theme.colors.shadows.primary};
      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};
      padding: 0;
  
      &:hover {
        background: ${theme.colors.primary.dark};
      }
    }
`
);

const CardCover = styled(Card)(
  ({ theme }) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);

const CardCoverAction = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(2)};
    bottom: ${theme.spacing(2)};
`
);

const ProfileCover = ({ user }) => {
  const [uid, setUid] = useState<string>("-1")
  return (
    <>
      <Card style={{ backgroundColor: "white", padding: "10px" }} >
        <Stack direction="column" spacing={5}>

          <TextField sx={{ width: 1 }} id="outlined-password-input" label="uid" type="number" autoComplete="current-password" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUid(event.target.value);
          }} onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              console.log("search_ui_id" + uid);
            }
          }} />
          <Avatar style={{ borderRadius: 75 }} sx={{ width: 150, height: 150 }} variant="rounded" alt={user.name} src={user.avatar} />
          <Typography variant="h3" component="h3" gutterBottom>
            Gold:1000
          </Typography>
          <Typography variant="h3" component="h3" gutterBottom>
            Di:1000
          </Typography>

          <Button style={{

            backgroundColor: "red",
            padding: "18px 3px",
            fontSize: "18px"
          }}
            variant="contained" >Kich user</Button>
        </Stack>



      </Card>
    </>
  );
};

ProfileCover.propTypes = {
  // @ts-ignore
  user: PropTypes.object.isRequired
};

export default ProfileCover;
