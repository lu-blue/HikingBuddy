//NPM packages
import React, { Component } from "react";
//Project files
import Feedback from "../../components/HomeComponents/Feedback";
import BlogPost from "../../components/HomeComponents/BlogPost";
import Footer from "../../components/HomeComponents/Footer";
import SwedenTrails from "../../components/HomeComponents/SwedenTrails";
import IntroHome from "../../components/HomeComponents/IntroHome";
import NavHome from "../../components/HomeComponents/NavHome";
//Styling
import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

/* Styiling for the home page component
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Let's explore together"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="Do you like nature and sports?"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button as="a" color="green" size="huge">
      <a href="/signup"> Start Exploring!</a>
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

const HomepageLayout = () => (
  <Segment>
    <NavHome />
    <IntroHome />
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Connect and share
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              The place made to connect people who love nature and outdoor
              activities in order to share their experiences, recommendations,
              learn from each other and share the best moments together.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Do you love nature as we love?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Let's organise hiking routes and enjoy together amazing moments in
              nature. For all those passionate about nature and sport this is
              the place to be!
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="https://images.unsplash.com/photo-1601758282760-b6cc3d07523d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button inverted color="green" size="huge">
              <a href="/signup"> Start connecting with others!</a>
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <BlogPost />
    <SwedenTrails />
    <Divider inverted section />
    <Header as="h2" icon textAlign="center">
      <Icon color="blue" name="users" circular />
      <Header.Content>What do our users say about us? </Header.Content>
    </Header>
    <Feedback />
    <Footer />
  </Segment>
);

export default HomepageLayout;