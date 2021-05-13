import React from "react";
// import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// library.add(faFacebook);

export default function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am <span>Fotis Tsakiris</span>
        </h1>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          blanditiis itaque corrupti sapiente aliquam numquam quos nam,
          laudantium voluptates repellendus odio ipsam. Cum doloremque quia vel
          saepe exercitationem quibusdam corrupti.
        </p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>
      </header>
    </div>
  );
}
