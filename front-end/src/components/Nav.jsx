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
import { SplitText } from './SplitText';
import { HomePage } from './HomePage';
import { Projects } from './Projects';
import OutlineButton from './OutlineButton';
import Blocks from './Blocks';
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
                backgroundColor: "#00627d"
              }
            }}
          >
            <Tab label="Home" {...a11yProps(0)} style={{ minWidth: "20%", fontFamily: "Montserrat", fontSize: "15px", fontWeight: "bold" }} />
            <Tab label="About" {...a11yProps(1)} style={{ minWidth: "20%", fontFamily: "Montserrat", fontSize: "15px", fontWeight: "bold" }} />
            <Tab label="Skills" {...a11yProps(2)} style={{ minWidth: "20%", fontFamily: "Montserrat", fontSize: "15px", fontWeight: "bold" }} />
            <Tab label="Projects" {...a11yProps(3)} style={{ minWidth: "20%", fontFamily: "Montserrat", fontSize: "15px", fontWeight: "bold" }} />
            <Tab label="Contact" {...a11yProps(4)} style={{ minWidth: "20%", fontFamily: "Montserrat", fontSize: "15px", fontWeight: "bold" }} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} >
          <HomePage setValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          About
      </TabPanel>
        <TabPanel value={value} index={2}>
          Skills
      </TabPanel>
        <TabPanel value={value} index={3}>
          <Projects />
        </TabPanel>
        <TabPanel value={value} index={4}>
          Contact
      </TabPanel>
      </ThemeProvider>
    </div>
  );
}
