import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="container-md">
        <Container>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/800/400"
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Parental Guide</h2>
                <p>
                  Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus-
                  ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut
                  teollisuuden normaali testausteksti jo 1500-luvulta asti,
                  jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen
                  tehdäkseen esimerkkikirjan. Se ei ole selvinnyt vain viittä
                  vuosisataa, mutta myös loikan elektroniseen kirjoitukseen,
                  jääden suurinpiirtein muuntamattomana. Se tuli kuuluisuuteen
                  1960-luvulla kun Letraset-paperiarkit, joissa oli Lorem Ipsum
                  pätkiä, julkaistiin ja vielä myöhemmin tietokoneen
                  julkistusohjelmissa, kuten Aldus PageMaker joissa oli
                  versioita Lorem Ipsumista.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/800/400"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Make Calculations</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/800/400"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Compare Plans</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}
