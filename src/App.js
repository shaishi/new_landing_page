//core
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
//front10 components
import "@front10/landing-page-book/dist/themes/default/index.legacy_browsers.css";

import "./App.css";

import React, { Component } from "react";

import {
  Row,
  Header,
  Container,
  Hero,
  Image,
  Link,
  GithubButton,
  Column,
  Navbar,
  NavbarCollapse,
  NavbarBrand,
  NavbarNav,
  NavbarLink,
  Icon,
  LanguageSwitcher,
  Features,
  Team,
  BrowserSupport,
  Gif,
  Footer,
  Copyright,
  Social
} from "@front10/landing-page-book/dist/components";

import particles from "./data/particles.json";
import features from "./data/features.json";
import team from "./data/team.json";
import browsers from "./data/browsers.json";

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Column>
            <Header borderBottom type="h3">
            </Header>
          </Column>
        </Row>
        <Row className="mt-5">
          <Column>
            <center>
              <Image
                  alt="Front10 logo"
                  className="main-logo"
                  src="images/logo/front10.png"
                  width="480"
              />
            </center>
            <Hero
              backgroundColor="#212529"
              particlesParams={particles}
              minHeight="50vh"
            >
              <Container>
                <Header className="text-warning">CloutClash a Vineeland company</Header>
                <Header className="text-warning" type="h5">
                  Fantasies do come true!
                </Header>
                <div className="mt-5">
                </div>
              </Container>
            </Hero>
          </Column>
        </Row>
        <Row className="mt-5">
          <Column>
            <Header type="h5">Features</Header>
            <Features
              features={features}
              imageCircle={false}
              showBorder={false}
              showSubtitle={true}
            />
          </Column>
        </Row>
        <Row className="mt-5">
          <Column>
            <Header type="h5">The Team</Header>
            <Team
              showBorder={false}
              members={team}
              socials={["linkedin", "twitter"]}
            />
          </Column>
        </Row>
        <Row className="mt-5">
          <Column>
            <Footer>
              <Row>
                <Column className="col-sm-12 col-md">
                  <Copyright showAllRightText={false} text="CloutCLash a Vineeland Company" />
                </Column>
                <Column className="col-sm-12 col-md mt-3 mt-md-0">
                  <span>With ♥ by </span>
                    <Image
                      alt="cloutclash"
                      src="images/logo/front10.png"
                      width="100"
                    />
                </Column>
                <Column className="col-sm-12 col-md mt-3 mt-md-0">
                  <Social
                    type="email"
                    url="gilly@vineeland.com‏"
                  />
                  <Social
                    type="linkedin"
                    url="https://www.linkedin.com/in/gilliber/"
                  />
                </Column>
              </Row>
            </Footer>
          </Column>
        </Row>
        <Row className="mt-5 mb-5">
          <Column className="text-center">
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;
