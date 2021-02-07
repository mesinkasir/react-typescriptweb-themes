import * as React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { render } from "react-dom";
import {
  Kasir,
  Contact,
  Webapp,
  Premium,
  Dynamic,
  Modern,
  Static,
  Getaxcora,
  Blogspot,
  Larapos,
  Boosterpos,
  Axcorapos,
  Dexoshop,
  Dxretail,
  Lava,
  Multipos,
  Posx,
  Zresto,
  Funresto,
  Sipresto,
  Boostresto,
  Dxresto,
  Restox
} from "./Pages";
import "./style.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@primer/components";
import "@primer/css/utilities/index.scss";
import {
  Text,
  Box,
  Heading,
  AvatarPair,
  Header,
  Grid,
  Button,
  Avatar,
  AvatarStack
} from "@primer/components";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="bg-dark text-light">
          <ThemeProvider theme={theme}>
            <Header className="bg-purple">
              <Header.Item full>
                {" "}
                <a href="/">
                  <Avatar
                    src="https://github.com/octocat.png"
                    size={20}
                    square
                    alt="@octocat"
                  />
                </a>
              </Header.Item>
              <Header.Item mr={1}>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
                <Link to="/webapp">
                  <Button> Web Apps</Button>
                </Link>
                <Link to="/contact">
                  <Button>Contact</Button>
                </Link>
              </Header.Item>
            </Header>
            <Grid gridTemplateColumns="repeat(1, auto)" gridGap={1}>
              <Box
                className="p-3 text-center"
                color="bodytext"
                p={4}
                bg="purple.2"
              >
                <Heading pb={3}>
                  <Link to="/" className="text-dark">
                    Kasir Online
                  </Link>
                </Heading>
                <AvatarPair>
                  <Avatar src="https://avatars.githubusercontent.com/github" />
                  <Avatar src="https://avatars.githubusercontent.com/primer" />
                </AvatarPair>
                <br />
                <Text fontSize={2}> Mesin Kasir</Text>
                <Text fontSize={2}> Aplikasi Kasir</Text>
                <br />
                <AvatarStack>
                  <Avatar
                    alt="Primer"
                    src="https://avatars.githubusercontent.com/primer"
                  />
                  <Avatar
                    alt="GitHub"
                    src="https://avatars.githubusercontent.com/vercel"
                  />

                  <Avatar
                    alt="Atom"
                    src="https://avatars.githubusercontent.com/mesinkasir"
                  />
                  <Avatar
                    alt="Desktop"
                    src="https://avatars.githubusercontent.com/github"
                  />
                  <Avatar
                    alt="Desktop"
                    src="https://avatars.githubusercontent.com/reactjs"
                  />
                </AvatarStack>
              </Box>
            </Grid>
            <Grid
              className="container"
              gridTemplateColumns="repeat(1, auto)"
              gridGap={3}
            >
              <Box p={3}>
                <Switch>
                  <Route exact path="/" component={Kasir} />
                  <Route exact path="/webapp" component={Webapp} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/premium" component={Premium} />
                  <Route exact path="/modern" component={Modern} />
                  <Route exact path="/dynamic" component={Dynamic} />
                  <Route exact path="/getaxcora" component={Getaxcora} />
                  <Route exact path="/blogspot" component={Blogspot} />
                  <Route exact path="/larapos" component={Larapos} />
                  <Route exact path="/boosterpos" component={Boosterpos} />
                  <Route exact path="/axcorapos" component={Axcorapos} />
                  <Route exact path="/dexoshop" component={Dexoshop} />
                  <Route exact path="/dxretail" component={Dxretail} />
                  <Route exact path="/lava" component={Lava} />
                  <Route exact path="/multipos" component={Multipos} />
                  <Route exact path="/posx" component={Posx} />
                  <Route exact path="/zresto" component={Zresto} />
                  <Route exact path="/funresto" component={Funresto} />
                  <Route exact path="/sipresto" component={Sipresto} />
                  <Route exact path="/boostresto" component={Boostresto} />
                  <Route exact path="/dxresto" component={Dxresto} />
                  <Route exact path="/restox" component={Restox} />
                  <Route exact path="/static" component={Static} />
                </Switch>
              </Box>
            </Grid>
            <div className="col-12 col-md-12 p-3 text-center">
              copyrights{" "}
              <a href="https://axcora.com/getaxcoracms" className="text-white">
                axcora technology
              </a>
            </div>
          </ThemeProvider>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
