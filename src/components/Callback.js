import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Callback extends Component {

  render() {
    return (
      <React.Fragment>
        <main>
          <Redirect to="/settings" />
        </main>
      </React.Fragment>
    );
  }
}

export default Callback;