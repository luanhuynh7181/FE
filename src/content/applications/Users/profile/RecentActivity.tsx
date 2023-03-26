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

import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';

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
  gold: 3434,
  name: "luanhv"
}
function RecentActivity() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
    );

  };

  const createTreeExtend = (key: string, obj: Object) => (
    <TreeItem nodeId="1" label={key}>
      {
        Object.keys(obj).map((k, v) =>
        (
          <TreeItem nodeId="1" key={k} label={k + ":" + v.toString()} />
        )

        )
      }
    </TreeItem>

  )
  return (
    <Card>
      <Box sx={{ width: 1 }} display="flex" alignItems="flex-start" />
      <TextField sx={{ width: 1 }}
        id="outlined-search"
        label="Search model"
        type="search"
      />
      <Divider />
      <Box sx={{ height: 600, width: 1, overflowY: 'auto' }}>
        <Box sx={{ mb: 1 }}>
          <Button onClick={handleExpandClick}>
            {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
          </Button>
        </Box>
        <TreeView
          aria-label="controlled"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          multiSelect
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
            <TreeItem nodeId="3" label="Chrome" />
            <TreeItem nodeId="4" label="Webstorm" />
          </TreeItem>
          <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="6" label="MUI">
              <TreeItem nodeId="7" label="src">
                <TreeItem nodeId="8" label="index.js" />
                <TreeItem nodeId="9" label="tree-view.js" />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Box>
    </Card>
  );
}

export default RecentActivity;
