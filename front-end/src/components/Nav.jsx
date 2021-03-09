import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { HomePage } from './HomePage';
import { Projects } from './Projects';
import { About } from './About';
import { Contact } from './Contact';
import '../styles/Nav.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "#002731",
    // backgroundColor: theme.palette.background.primary,
    // backgroundColor: theme.palette.background.paper,

  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#002731",
    },
  },
  // spacing: 8,
});

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log('this is value', value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            className="nav-tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#4F9493"
              }
            }}
          >
            <Tab className="nav-text" label="Home" {...a11yProps(0)} />
            <Tab className="nav-text" label="Projects" {...a11yProps(1)} />
            <Tab className="nav-text" label="About" {...a11yProps(2)} />
            <Tab className="nav-text" label="Contact" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} >
          <HomePage setValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Projects setValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <About setValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Contact setValue={setValue} />
        </TabPanel>
      </ThemeProvider>
    </div>
  );
}
