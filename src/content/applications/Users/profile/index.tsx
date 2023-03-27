import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid, Container } from '@mui/material';

import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import Feed from './Feed';
import PopularTags from './PopularTags';
import MyCards from './MyCards';
import Addresses from './Addresses';
import { makeStyles } from '@mui/styles';

function ManagementUserProfile() {
  const useStyles = makeStyles(theme => ({
    color: {
      backgroundColor: 'black'
    }
  }))

  const user = {
    savedCards: 1,
    name: 'Catherine Pik22e',
    coverImg: '/static/images/icon/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'Web Developer',
    location: 'Barcelona, Spain',
    followers: '465'
  };


  return (
    <>
      <Grid
        style={{ backgroundColor: '#f2f2f2' }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
        pl={3}
        pr={3}
        pt={3}
      >
        <Grid item md={5}>
          <ProfileCover user={user} />
        </Grid>
        <Grid item md={7}>
          <RecentActivity />
        </Grid>

      </Grid>
    </>
  );
}

export default ManagementUserProfile;
