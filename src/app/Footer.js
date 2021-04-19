import { Container, Grid } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import '../App.css';
const bayon =
  "https://media-exp1.licdn.com/dms/image/C4D03AQHXzD5ZUmbpSw/profile-displayphoto-shrink_200_200/0/1516574446401?e=1619049600&v=beta&t=4hI89lgoF7rS7uomD0_kLlEtVIIRHJn6Dobs06yP5UE";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        forteworks.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer} style={{marginBottom:"100px"}}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={4}>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <div style={{ marginTop: 15 }}>
                <a
                  href="tel:8122670592"
                  style={{ color: "#222", textDecoration: "none" }}
                >
                  (812) 267-0592<Icon className="appIcon">phone</Icon>
                </a>
              </div>
              <div style={{ marginTop: 15 }}>
                <a
                className="appAnchor"
                  href="mailto:forteworks@gmail.com"
                  style={{ color: "#222", textDecoration: "none" }}
                >
                  forteworks@gmail.com<Icon className="appIcon">email</Icon>
                </a>
              </div>
              <div style={{ marginTop: 15 }}>
                <a
                className="appAnchor"
                  href="http://www.bayonforte.com/Forte_2021_gmail.pdf"
                  target="blank"
                  style={{ textDecoration: "none", color: "#222",fontWeight:"bold" }}
                  download
                >
                  Resume
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div style={{ marginTop: "20px" }}>
              <Typography variant="h6" align="center" gutterBottom>
                forteworks
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                component="p"
              >
                Saas, MVP, Mobile Apps, Prototypes
              </Typography>
              <Copyright />
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <p>Work:</p>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <a className="appAnchor" href="http://www.servewerx.com" target="blank">servewerx.com  <Icon className="appIcon">web</Icon> </a>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <a className="appAnchor" href="http://www.blue-cottage-remodeling.com" target="blank">blue-cottage-remodeling.com <Icon className="appIcon">web</Icon> </a>
            </div>
           
          </Grid>
        </Grid>
      </Container>
      

    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
