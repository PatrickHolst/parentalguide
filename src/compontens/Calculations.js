import React, { Component } from "react";
import { Badge } from "react-bootstrap";

export default class Calculations extends Component {
  render() {
    return (
      <div>
        <h1>
          Create Calculation{" "}
          <Badge bg="primary" as="Button">
            New
          </Badge>
        </h1>
      </div>
    );
  }
}

// const Calculations = () => {
//   return (
//     <div>
//       <h2>Calculation</h2>
//     </div>
//   );
// };

// export default Calculations;
