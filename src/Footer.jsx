import React from "react";
import web from "../src/images/app-store.png";
import web1 from "../src/images/play-store.png";
import web2 from "../src/images/Tlogo-3.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3> Download our app</h3>
            <p>Download app for android and ios mobile phone.</p>
            <div className="app-logo">
              <img
                src="https://uploads.codesandbox.io/uploads/user/ad4446d8-fed7-43c0-aecd-acc0b4677c76/Hm6n-app-store.png"
                alt="aapstorlogo"
              />
              <img
                src="https://uploads.codesandbox.io/uploads/user/ad4446d8-fed7-43c0-aecd-acc0b4677c76/OF9n-play-store.png"
                alt="playstorelogo"
              />
            </div>
          </div>
          <div className="footer-col-2">
            <img
              src="https://uploads.codesandbox.io/uploads/user/ad4446d8-fed7-43c0-aecd-acc0b4677c76/Dy1g-Tlogo-3.png"
              alt="mainlogo"
            />
            <p>
              Our Purpose is to Sustainably make the pleasure Benefits of Best
              designs Accessible to the Many
            </p>
          </div>
          <div className="footer-col-4">
            <h3>Fallow us on </h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">©Copyright 2020 - DarkLordDesign(sarvesh) </p>
      </div>
    </div>
  );
};

export default Footer;
