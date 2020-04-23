import React from "react";

function Footer() {
  return (
<div class="position-fixed fixed-bottom">
 <footer class="bg-dark py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="accordion w-100 d-lg-flex" id="accordion">
                <div class="col-lg-4 col-md-12">
                  <a
                    href="#one"
                    data-toggle="collapse"
                    class="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none"
                    >Useful Links</a
                  >

                  <div
                    class="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block"
                  >
                    Useful Links
                  </div>

                  <div
                    class="collapse text-white d-lg-flex"
                    id="one"
                    data-parent="#accordion"
                  >
                    <ul class="list-unstyled">
                      <li>
                        <a href="#" class="nav-link p-0 text-white">Menu1</a>
                      </li>
                      <li>
                        <a href="#" class="nav-link p-0 text-white">Menu2</a>
                      </li>
                      <li>
                        <a href="#" class="nav-link p-0 text-white">Menu3</a>
                      </li>
                      <li>
                        <a href="#" class="nav-link p-0 text-white">Menu4</a>
                      </li>
                      <li>
                        <a href="#" class="nav-link p-0 text-white">Menu5</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <a
                    href="#two"
                    data-toggle="collapse"
                    class="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none"
                    >Two</a
                  >
                  <div
                    class="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block"
                  >
                    Two
                  </div>
                  <div
                    class="collapse text-white d-lg-flex"
                    id="two"
                    data-parent="#accordion"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque ratione quis doloribus, numquam ipsam voluptatibus
                    quia harum molestiae officia dolorum deserunt nihil soluta
                    dignissimos quibusdam cum nulla, similique illum. Rerum.
                  </div>
                </div>
                <div class="col-lg-4 col-md-12">
                  <a
                    href="#three"
                    data-toggle="collapse"
                    class="h5 text-uppercase text-white nav-link p-0 d-block d-lg-none d-xl-none"
                    >Three</a
                  >
                  <div
                    class="h5 text-uppercase text-white p-0 d-none d-lg-block d-xl-block"
                  >
                    Three
                  </div>
                  <div
                    class="collapse text-white d-lg-flex"
                    id="three"
                    data-parent="#accordion"
                  >
                    <div class="d-flex w-100 justify-content-between">
                      <a href="#" class="icon"
                        ><i class="fa fa-facebook"></i
                      ></a>
                      <a href="#" class="icon"><i class="fa fa-twitter"></i></a>
                      <a href="#" class="icon"
                        ><i class="fa fa-instagram"></i
                      ></a>
                      <a href="#" class="icon"
                        ><i class="fa fa-youtube-play"></i
                      ></a>
                      <a href="#" class="icon"
                        ><i class="fa fa-linkedin"></i
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
    <div class="container-fluid">
      <div class="row bg-danger">
        <div class="col-md-12">
          <div class="d-flex justify-content-center align-items-center">
            <span class="p-3 text-white"
              >FrontEndFunn &copy; Copyright 2019</span
            >
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default Footer;
