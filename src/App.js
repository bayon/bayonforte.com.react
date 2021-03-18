//
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Navigation from "./Navigation";
import store from "./redux/store";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Navigation />
          </Container>
        </React.Fragment>
      </div>
    </Provider>
  );
}

export default App;
