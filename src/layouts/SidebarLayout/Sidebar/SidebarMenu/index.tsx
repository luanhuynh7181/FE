import { useContext, useMemo } from 'react';
import { ListSubheader, List, Button, ListItem } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import { PATH_ROUTE } from 'src/route/routeConst';
import { MenuWrapper, SubMenuWrapper } from './Styled';
function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  function createItem(path: string, iconStart: any, name: string) {
    return (
      <ListItem component="div">
        <Button
          disableRipple
          component={RouterLink}
          onClick={closeSidebar}
          to={path}
          startIcon={iconStart} >
          {name}
        </Button>
      </ListItem>
    )
  }
  useMemo(() => {
  }, ["once"])
  return (
    <>
      <MenuWrapper>
        <SubMenuWrapper>
          <List component="div">
            {createItem(PATH_ROUTE.HOME.PATH, <DesignServicesTwoToneIcon />, "Home")}
          </List>
        </SubMenuWrapper>
        <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Accounts
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              {createItem(PATH_ROUTE.HOME.PATH + PATH_ROUTE.HOME.USER_PROFILE, <AccountCircleTwoToneIcon />, "User Profile")}
              {createItem("/management/profile/settings", <DisplaySettingsTwoToneIcon />, "User Settings")}
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
