import React from "react";

function Footer() {
  return (
<div className="position-fixed fixed-bottom">
 <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="accordion w-100 d-lg-flex" id="accordion">
                <div className="col-lg-4 col-md-12">
                  <a
                    href="#one"
                    data-toggle="collapse"
                    className="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none"
                    >Useful Links</a
                  >

                  <div
                    className="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block"
                  >
                    Useful Links
                  </div>

                  <div
                    className="collapse text-white d-lg-flex"
                    id="one"
                    data-parent="#accordion"
                  >
                    <ul className="list-unstyled">
                      <li>
                        <a href="#" className="nav-link p-0 text-white">Menu1</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link p-0 text-white">Menu2</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link p-0 text-white">Menu3</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link p-0 text-white">Menu4</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link p-0 text-white">Menu5</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <a
                    href="#two"
                    data-toggle="collapse"
                    className="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none"
                    >Two</a
                  >
                  <div
                    className="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block"
                  >
                    Two
                  </div>
                  <div
                    className="collapse text-white d-lg-flex"
                    id="two"
                    data-parent="#accordion"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque ratione quis doloribus, numquam ipsam voluptatibus
                    quia harum molestiae officia dolorum deserunt nihil soluta
                    dignissimos quibusdam cum nulla, similique illum. Rerum.
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <a
                    href="#three"
                    data-toggle="collapse"
                    className="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none"
                    >Three</a
                  >
                  <div
                    className="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block"
                  >
                    Three
                  </div>
                  <div
                    className="collapse text-white d-lg-flex"
                    id="three"
                    data-parent="#accordion"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <a href="#" className="icon"
                        ><i className="fa fa-facebook"></i
                      ></a>
                      <a href="#" className="icon"><i className="fa fa-twitter"></i></a>
                      <a href="#" className="icon"
                        ><i className="fa fa-instagram"></i
                      ></a>
                      <a href="#" className="icon"
                        ><i className="fa fa-youtube-play"></i
                      ></a>
                      <a href="#" className="icon"
                        ><i className="fa fa-linkedin"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="container-fluid">
      <div className="row bg-info">
        <div className="col-md-12">
          <div className="d-flex justify-content-center align-items-center">
            <span className="p-3 text-white"
              >CaptStorm &copy; Copyright 2020</span
            >
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Footer;
