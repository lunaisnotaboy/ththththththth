import * as React from "react";

import Profiles from "./Profiles";

export default class Body extends React.Component {
  render() {
    return (
      <main>
        <p>Hey! Sorry for the lack of... anything.</p>
        <hr />
        <p>
          The Mint Farm is gone for now, due to my ISP terminating our
          subscription. We are planning to move to a local ISP, so The Mint Farm{" "}
          <em>might</em> come back in the near future.
        </p>
        <p>But for now, nothing.</p>
        <hr />
        <p>P.S. if you need to contact me, use any of these services below:</p>
        <Profiles />
      </main>
    );
  }
}
