import { Theme } from '@material-ui/core';
import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import CarInfoGridView from './gridView/CarInfoGridView';
import StockInfoGridView from './gridView/StockInfoGridView';
import TabPanel from './TabPanel';

interface MainViewProps {}

const MainView: React.FC<MainViewProps> = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Stock Info' {...Props(0)} />
          <Tab label='Car Info' {...Props(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <StockInfoGridView/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CarInfoGridView/>
      </TabPanel>
    </div>
  );
};

function Props(index: any) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default MainView;