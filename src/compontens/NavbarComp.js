import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculations from "./Calculations";
import CompareCalc from "./CompareCalc";
import Home from "./Home";
import Insurances from "./Insurances";
import OptimizedPlan from "./OptimizedPlan";
import styled from "styled-components";

const Styles = styled.div`
  .NavDropdown {
    backgroundcolor: "#93D7E0";
  }
`;

export default class NavbarComp extends Component {
  render() {
    return (
      <Styles>
        <Router>
          <div>
            <Navbar style={{ backgroundColor: "#93D7E0" }}>
              <Container>
                <Navbar.Brand as={Link} to={"/"}>
                  Parental Guide
                </Navbar.Brand>
                <Nav className="me-center">
                  <NavDropdown
                    title="Calculations"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item as={Link} to={"/calculations"}>
                      Create Calculation
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/comparecalc"}>
                      Compare Calculations
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to={"/optimizedplan"}>
                      Create optimized plan
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to={"/insurances"}>
                    Insurances
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculations" element={<Calculations />} />
              <Route path="/comparecalc" element={<CompareCalc />} />
              <Route path="/optimizedplan" element={<OptimizedPlan />} />
              <Route path="/insurances" element={<Insurances />} />
            </Routes>
          </div>
        </Router>
      </Styles>
    );
  }
}
