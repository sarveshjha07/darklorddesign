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
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h1>
                    Grow Your Business with
                    <strong className="brand">Dark Lord Designs</strong>
                  </h1>
                  <h2 className="my-3">We will love to hear from you people</h2>
                  <div className="mt-3">
                    <Link href="" className="btn btn-outline-dark" to="/">
                      Have a tour >>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated mr-2 "
                    alt="home image"
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
