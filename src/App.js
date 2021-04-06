//
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Navigation from "./Navigation";
import store from "./redux/store";


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
