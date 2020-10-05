import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <div className="col-md-4 col-10 mx-auto mt-3 ">
                <div className="card text-center shadow">
                  <img
                    src="https://www.wespeakiot.com/wp-content/uploads/2017/12/when-products-turn-into-smart-services.jpg"
                    className="card-img-top"
                    alt="Iotimage"
                  />
                  <div className="card-body">
                    <h2 className="card-title text-center">IoT</h2>
                    <p className="card-text text-center">
                      Pretty much any physical object can be transformed into an
                      IoT device if it can be connected to the internet.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto mt-3">
                <div className="card text-center shadow">
                  <img
                    src="https://www.pngitem.com/pimgs/m/192-1920139_photo-canvas-editor-microsite-design-hd-png-download.png"
                    className="card-img-top"
                    alt="webapps"
                  />
                  <div className="card-body text-center">
                    <h2 className="card-title">Responsive Web Apps</h2>
                    <p className="card-text">
                      No need to download the apps, the ads on web are available
                      for everyone who browses for content. Responsive design
                      allows advertisers to present their ad to customers
                      without caring about the screen sizes of mobile devices.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto mt-3">
                <div className="card text-center shadow">
                  <img
                    src="https://i.imgur.com/JQNdsM1.gif"
                    className="card-img-top"
                    alt="frontend"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      Best Frontend Designs With Awesome animated themes
                    </h4>
                    <p className="card-text">
                      We Have the world best collection of creative themes and
                      unrevealed best animated homepages. neons, blurs and
                      watery effects are one of that designs
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto mt-3">
                <div className="card text-center shadow">
                  <img
                    src="https://i.gifer.com/VyYs.gif"
                    className="card-img-top"
                    alt="software"
                  />
                  <div className="card-body">
                    <h2 className="card-title">Softwares</h2>
                    <p className="card-text">
                      We can create python softwares which can be useful to
                      single individuals or a group of peoples. totally depends
                      on type of user and as per demand of users.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto mt-3">
                <div className="card text-center shadow">
                  <img
                    src="https://i.gifer.com/TIbw.gif"
                    className="card-img-top"
                    alt="database"
                  />
                  <div className="card-body">
                    <h1 className="card-title">Databases</h1>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto mt-3">
                <div className="card text-center shadow">
                  <img
                    src="https://64.media.tumblr.com/5615a43dcca4f77ef41606dcb4f2510b/tumblr_pcu5lbvLmi1ujqvcvo1_500.gif"
                    className="card-img-top"
                    alt="future"
                  />
                  <div className="card-body">
                    <h1 className="card-title">Open for Future Ideas</h1>
                    <p className="card-text">always open for new ideas.</p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header" className="my-3 ml-5">
        <Link className="btn-get-started" to="/about">
          Visit next >>
        </Link>
      </div>
    </>
  );
};

export default Service;
