// NPM Packages
import React from "react";
// Project styiling from semantic ui
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";

export default function IntroHome(mobile) {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 400, padding: "1em 0em" }}
      vertical
      color="blue"
    >
      <Container text textAlign="center">
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
    </Segment>
  );
}