import React from "react";

import { Check2Circle } from "react-bootstrap-icons";

import {
  Card,
  Row,
  Col,
  Button,
  CardDeck,
  Carousel,
  Accordion,
  Container,
} from "react-bootstrap";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import One from "../../components/images/seo/1";
import Two from "../../components/images/seo/2";
import Three from "../../components/images/seo/3";
import Experience from "../../components/images/seo/experience";
import SEOExpertise from "../../components/images/seo/SEOexpertise";
import ASOExpertise from "../../components/images/seo/ASOexpertise";
import ProvenTrackRecord from "../../components/images/seo/provenTrackRecord";
import SEOCard from "../../components/images/seo/SEOservice";
import ASOCard from "../../components/images/seo/ASOservice";
import SEOASOCard from "../../components/images/seo/SEOASOservice";
import LocalSEOCard from "../../components/images/seo/localSEO";
import RankSEO from "../../components/images/seo/rankseo";
import RankASO from "../../components/images/seo/rankaso";
import RankSEOASO from "../../components/images/seo/rankseoaso";
import RankLocal from "../../components/images/seo/ranklocal";
import SEOModel from "../seo/seoModel";
import ASOModel from "../seo/asoModel";
import FAQ from "../seo/faq";
import SEOASOConsult from "./seo-aso-consultancyModel";
import LocalSEO from "./localSEOModel";

const SeoPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>SEO/ASO</h1>{" "}
    <Carousel>
      <Carousel.Item>
        <One />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Two />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Three />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />
    <p style={{ textAlign: "justify" }}>
      Get expert Search Engine Optimization and App Store Optimization services
      for your business. We cater from sole proprietorship to corporate to get
      the website/pages ranked in searches and convert for sales
    </p>
    <br />
    <br />
    <br />
    <br />
    <Container>
      <Row>
        <Col sm={6}>
          <h2>Search Engine Optimization</h2>

          <iframe
            src="https://www.youtube.com/embed/WP8fv5HcN4U"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width="100%"
            height="300px"
            allowFullScreen
          ></iframe>
          <p style={{ textAlign: "justify" }}>
            We will make your website, blog, product or service ranked in online
            environments. Therefore it reaches a broad audience in your
            segmented market and increases conversions.
          </p>
        </Col>
        <Col sm={6}>
          <h2>App Store Optimization</h2>{" "}
          <iframe
            // width="791"
            // height="445"
            src="https://www.youtube.com/embed/nKt8njedt3g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width="100%"
            height="300px"
            allowFullScreen
          ></iframe>
          <p style={{ textAlign: "justify" }}>
            We will naturally get your app to the most downloaded app list of
            App Store and PlayStore through App Store Optimization with which
            most customers convert for sales
          </p>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <br />
    <h2>Small & Medium Business Solutions</h2>
    <CardDeck>
      <Card>
        {/* <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          SEO Getting ranked in Search Results?
        </Card.Header> */}
        <SEOCard />

        <Card.Body>
          <Row>
            <Col>
              <RankSEO />
            </Col>
          </Row>

          <Card.Text style={{ textAlign: "justify" }}>
            <br />
            <Check2Circle color="royalblue" size={30} /> Market research
            <br />
            <br />
            <Check2Circle color="royalblue" size={30} /> On page optimization
            <br />
            <br />
            <Check2Circle color="royalblue" size={30} /> Off page optimization
            <br />
          </Card.Text>
          <SEOModel />
        </Card.Body>

        <div className="card-body gradient-buttons">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            {" "}
            Get a quote
          </button>
        </div>
      </Card>

      <Card>
        {/* <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          ASO Getting ranked in App Store
        </Card.Header> */}
        <ASOCard />
        <Card.Body>
          <Row>
            <Col>
              <RankASO />
            </Col>
          </Row>
          <Card.Text style={{ textAlign: "justify" }}>
            <br />
            <Check2Circle color="royalblue" size={30} /> App Store Optimization
            <br />
            <br />
            <Check2Circle color="royalblue" size={30} /> PlayStore Optimization
            <br />
            <br />
            <Check2Circle color="royalblue" size={30} /> Off page optimization
            <br />
          </Card.Text>
          <ASOModel />
        </Card.Body>

        <div className="card-body gradient-buttons">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            {" "}
            Get a quote
          </button>
        </div>
      </Card>
      <Card>
        {/* <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          SEO/ASO Consultancy - How to Optimize
        </Card.Header> */}
        <SEOASOCard />
        <Card.Body>
          <Row>
            <Col>
              <RankSEOASO />
            </Col>
          </Row>
          <Card.Text style={{ textAlign: "justify" }}>
            <br />
            <Check2Circle color="royalblue" size={30} /> Audit,Revealing issues
            <br />
            <br />
            <Check2Circle color="royalblue" size={30} /> SEO, SEM & ASO
            <br />
            <br />
            <Check2Circle color="royalblue" size={30} /> Marketing Strategy
            <br />
          </Card.Text>
          <SEOASOConsult />
        </Card.Body>

        <div className="card-body gradient-buttons">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            {" "}
            Get a quote
          </button>
        </div>
      </Card>

      <Card>
        {/* <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          Local SEO Services
        </Card.Header> */}
        <LocalSEOCard />
        <Card.Body>
          <Row>
            <Col>
              <RankLocal />
            </Col>
          </Row>
          <Card.Text style={{ textAlign: "justify" }}>
            <br />
            <Check2Circle color="royalblue" size={30} /> App Store Optimization
            <br />
            <br />
            <Check2Circle color="royalblue" size={30} /> PlayStore Optimization
            <br />
            <br />
            <Check2Circle color="royalblue" size={30} /> Off page optimization
            <br />
          </Card.Text>
          <LocalSEO />
        </Card.Body>

        <div className="card-body gradient-buttons">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            {" "}
            Get a quote
          </button>
        </div>
      </Card>
    </CardDeck>
    <br />
    <br />
    <br />
    <br />
    <h2>Why Choose Us?</h2>
    <Container>
      <Row>
        <Col>
          <p style={{ textAlign: "justify" }}>
            {" "}
            We believe in conversions more than the impressions. Therefore, we
            analyze customers, their search intent, psychological needs and
            their search behaviors and do optimization in Search Engines,
            AppStore and PlayStore, Social Media while ensuring that your brands
            are reached to the right audience though sales funnel strategies.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <Experience />

          <Card.Title>10+ Experience</Card.Title>
          <Card.Text>
            Insfra has worked with many customers around the world for 11 years.
          </Card.Text>
        </Col>
        <Col sm={3}>
          <SEOExpertise />

          <Card.Title>SEO Expertise</Card.Title>
          <Card.Text>
            We will bring you to the top of the search results and increase web
            traffic{" "}
          </Card.Text>
        </Col>
        <Col sm={3}>
          <ASOExpertise />

          <Card.Title>ASO Expertise</Card.Title>
          <Card.Text>
            We will make your app be among the most downloaded apps in App Store
          </Card.Text>
        </Col>
        <Col sm={3}>
          <ProvenTrackRecord />

          <Card.Title>Proven Track Record</Card.Title>
          <Card.Text>
            Each member holds expertise in their area. Friendly, Professional
            and Dynamic
          </Card.Text>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <br />
    <h2>Top Articles from SEO/ASO blog</h2>
    <Container>
      <Row>
        <Col sm={4}>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />

          <Card.Title>Article 1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Col>
        <Col sm={4}>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />

          <Card.Title>Article 2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Col>
        <Col sm={4}>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Card.Body>
            <Card.Title>Article 3</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <br />
    <br />
    <h2>FAQs</h2>
    <FAQ />
  </Layout>
);

export default SeoPage;
