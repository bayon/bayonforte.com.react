import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useSelector } from "react-redux";
import logo from "./assets/img/pexels-pixabay-159201.jpg";
import BackendAnimatedCard from './cards/BackendAnimatedCard';
import DatabaseAnimatedCard from './cards/DatabaseAnimatedCard';
//import "./card.css";
import FrontEndAnimatedCard from './cards/FrontEndAnimatedCard';
//import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";



// const calc = (x, y) => [
//   -(y - window.innerHeight / 2) / 20,
//   (x - window.innerWidth / 2) / 20,
//   1.07,
// ];
// const trans = (x, y, s) => `perspective(600px)  scale(${s})`;
// const FrontEndAnimatedCard = () => {
//   const [props, set] = useSpring(() => ({
//     xys: [0, 0, 1],
//     config: { mass: 5, tension: 350, friction: 40 },
//   }));
//   return (
//     <div>
//       <animated.div
//         className="card"
//         onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
//         onMouseLeave={() => set({ xys: [0, 0, 1] })}
//         style={{ transform: props.xys.interpolate(trans) }}
//         title="Title hello..."
//       >
//         <Typography variant="h5" component="h2">
//           Frontend
//         </Typography>

//         <Typography variant="body2" component="p" color="textSecondary">
//           React, Typescript, Animation, Redux
//           <br />
//           {'"Single Page Applications"'}
//         </Typography>

//         <Button
//           size="small"
//           onClick={() => {
//             alert("call or text me: 812-267-0592");
//           }}
//         >
//           +
//         </Button>
//       </animated.div>
//     </div>
//   );
// };

//---
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

// const sections = [
//   { title: "Frontend", url: "#" },
//   { title: "Databases", url: "#" },
//   { title: "Backend", url: "#" },
// ];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: { logo },
  linkText: "Continue reading…",
};

export default function Blog() {
  const classes = useStyles();
  var auth = useSelector((state) => state.auth.authorized);

  //sections={sections}
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header /> */}
        
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <FrontEndAnimatedCard></FrontEndAnimatedCard>
            </Grid>

            <Grid item xs={12} sm={4}>
              <DatabaseAnimatedCard></DatabaseAnimatedCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <BackendAnimatedCard></BackendAnimatedCard>
            </Grid>
          </Grid>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
        </main>
      </Container>
      <Footer title="Footer" description="Now you know too much!" />
    </React.Fragment>
  );
}
