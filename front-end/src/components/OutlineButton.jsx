import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import '../styles/OutlineButton.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007696",
    },
  },
});



export default function OutlineButton(props) {
  const classes = useStyles();

  const handleButton = () => {
    props.setValue(3);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Button variant="outlined" color="primary" className="project-button" style={{ border: '2px solid' }} onClick={handleButton}>
          {props.text}
        </Button>
      </div>
    </ThemeProvider>
  );
}