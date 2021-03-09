import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Profiles extends React.Component {
  render() {
    return (
      <ul className="contact">
        <li>
          <h3>
            <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
          </h3>
          <a href="//github.com/stampylongr">(github.com/stampylongr)</a>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={["fab", "dev"]} /> DEV
          </h3>
          <a href="https://dev.to/stampylongr">(dev.to/stampylongr)</a>
        </li>
        <li>
          <h3>
            <FontAwesomeIcon icon={["fas", "envelope"]} /> Email
          </h3>
          <span>(yo [at] themintfarm [dot] ml)</span>
        </li>
      </ul>
    );
  }
}
