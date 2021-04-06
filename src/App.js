//
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
//stripe dependencies:
import HomePage from "./blog/pages/HomePage";
import Navigation from "./Navigation";
import store from "./redux/store";
//const stripePromise = loadStripe('pk_live_c03o8lC0VMl6y5eBpZ1eov45');  //test versus live
const stripePromise = loadStripe("pk_test_7aHY16H2I0thccZMQJIDUNpi");

function App(props) {
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <div className="App">
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <Navigation />
            </Container>
          </React.Fragment>
          <HomePage />
        </div>
      </Elements>
    </Provider>
  );
}

export default App;
