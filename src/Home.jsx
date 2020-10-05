import React from "react";
import { Link } from "react-router-dom";
import web from "../src/images/tiger.jpg";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row mt-5">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow Your Business with
                    <strong className="brand"> Dark Lord Designs</strong>
                  </h1>
                  <h2 className="my-3">We will love to hear from you.</h2>
                  <div className="mt-3">
                    <Link className="btn-get-started" to="/service">
                      Have a tour >>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center ">
                  <img
                    src="https://uploads.codesandbox.io/uploads/user/ad4446d8-fed7-43c0-aecd-acc0b4677c76/oClO-tiger.jpg"
                    className="img-fluid animated mr-2 "
                    alt="homeimage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
