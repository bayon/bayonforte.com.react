//
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
//TODO: set up stripe payments https://www.youtube.com/watch?v=JkSgXgqRH6k
//stripe 
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Navigation from "./Navigation";
import store from "./redux/store";


 const stripePromise = loadStripe('pk_test_7aHY16H2I0thccZMQJIDUNpi');

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

//





function App(props) {

  const [left,setLeft] = useState(false)

  const toggleDrawer = () => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setLeft(false);
    // this.setState({ left: false });
  };
  
  const openDrawer = () => {
    setLeft(true);
    // this.setState({
    //   left: true
    // });
  };

  
  
  return (
    <Provider store={store}>
       <Elements stripe={stripePromise}>
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Navigation />
            {/* <Toolbar openDrawerHandler={openDrawer} />
        <Drawer
          left={left}
          toggleDrawerHandler={toggleDrawer}
        /> */}
          </Container>
        </React.Fragment>
      </div>
      </Elements>
    </Provider>
  );
}

export default App;
