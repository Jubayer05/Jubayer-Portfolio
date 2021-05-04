import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Contact.css";

const Contacts = () => {
  return (
    <div className="contacts" id="contact">
      <h1 className="section__heading">Contact</h1>
      <p className="contact__text">
        Have a question or want to work together? Feel free to talk.
      </p>
      <div className="contact__content">
        <table>
          <tr>
            <td className="icon__td">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </td>
            <td>
              <p>Sirajganj, Rajshahi, Bangladesh</p>
            </td>
          </tr>
          <tr>
            <td className="icon__td">
              <FontAwesomeIcon icon={faPhone} />
            </td>
            <td>
              <p>+880-1753-139834</p>
            </td>
          </tr>
          <tr>
            <td className="icon__td">
              <FontAwesomeIcon icon={faEnvelope} />
            </td>
            <td>
              <p>jubayer0504@gmail.com</p>
            </td>
          </tr>
        </table>
      </div>
      <div class="icon_container">
        <a
          href="https://www.linkedin.com/in/jubayer-ahmed-a764b620a/"
          class="icon linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100018427915873"
          target="_blank"
          rel="noreferrer"
          class="icon facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://twitter.com/Jubayer05229019"
          target="_blank"
          rel="noreferrer"
          class="icon twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a
          href="https://github.com/Programmer-Jubayer"
          class="icon github"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className="copyright">
        &copy;copyright {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
};

export default Contacts;
