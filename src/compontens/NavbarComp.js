import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculations from "./Calculations";
import CompareCalc from "./CompareCalc";
import Home from "./Home";
import Insurances from "./Insurances";
import OptimizedPlan from "./OptimizedPlan";

// föregående färg: #93D7E0
// annan färg #00ABE4
// style i navbar: Navbar style={{ backgroundColor: "#00ABE4" }}
export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Container>
              <Navbar.Brand as={Link} to={"/"}>
                ParentalGuide
              </Navbar.Brand>
              <Nav className="me-center">
                <NavDropdown title="Calculations" id="navbarScrollingDropdown">
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
    );
  }
}
