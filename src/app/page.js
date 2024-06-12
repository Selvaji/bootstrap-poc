"use client"
import { useEffect, react } from 'react';
import Script from 'next/script';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1
  };
  return (
    <>


      <main>
        <nav className="navbar navbar-dark navbar-expand-sm blue-bg fixed-top">
          <div className="container-fluid">
            <a href="/" className="logo">
              <img src="https://images-dom.prod.aws.idp-connect.com/cug-cont/images/cug_logo.svg" alt="" />
            </a>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">League tables</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Subject guides</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Universities</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Open days</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Student</a>
                </li>
              </ul>
            </div>



          </div>
        </nav>

        <section className="hero-bg">
          <div className="container text-center">
            <div className="d-flex flex-column justify-content-center align-items-center title">
              <h1>Your future, your choice</h1>
              <p>Independent UK university rankings, course information and expert advice for every student</p>
            </div>
          </div>
        </section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-4">

              <div className="card border-0 shadow-lg cd-34 mx-auto mb-5" >
                <div className="d-flex justify-content-around card-img overflow-hidden">
                  <img className="card-img mx-auto "
                    src="https://images.ctfassets.net/szez98lehkfm/8JKzY7LZ08hQc2PQu8o1G/08633d81d626bfc838b97493a6f6f0a2/MyIC_Article136873?w=260&h=146&fm=webp&fit=fill"
                    alt="Card image cap" />
                </div>
                <div className="card-body  text-center">
                  <h5 className="card-title fw-semibold">Top 10 universities in Scotland 2025</h5>
                  <p>Would you like to study in Scotland? Check out the Top 10 Scottish unis and find out more...</p>

                </div>
              </div>
            </div>
            <div className="col-sm-4">

              <div className="card  border-0 shadow-lg cd-34 mx-auto mb-5 d-flex justify-content-around " >
                <div className="card-img overflow-hidden">
                  <img className="card-img mx-auto "
                    src="https://images.ctfassets.net/szez98lehkfm/8JKzY7LZ08hQc2PQu8o1G/08633d81d626bfc838b97493a6f6f0a2/MyIC_Article136873?w=260&h=146&fm=webp&fit=fill"
                    alt="Card image cap" />
                </div>
                <div className="card-body  text-center">
                  <h5 className="card-title fw-semibold">Top 10 universities in Scotland 2025</h5>
                  <p>Would you like to study in Scotland? Check out the Top 10 Scottish unis and find out more...</p>

                </div>
              </div>
            </div>
            <div className="col-sm-4">

              <div className="card  border-0 shadow-lg cd-34 mx-auto mb-5" >
                <div className="d-flex justify-content-around card-img overflow-hidden">
                  <img className="card-img mx-auto "
                    src="https://images.ctfassets.net/szez98lehkfm/8JKzY7LZ08hQc2PQu8o1G/08633d81d626bfc838b97493a6f6f0a2/MyIC_Article136873?w=260&h=146&fm=webp&fit=fill"
                    alt="Card image cap" />
                </div>
                <div className="card-body  text-center">
                  <h5 className="card-title fw-semibold">Top 10 universities in Scotland 2025</h5>
                  <p>Would you like to study in Scotland? Check out the Top 10 Scottish unis and find out more...</p>

                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="wrapper">
              <h2>Popular Subject Area</h2>
              <div className="carousel">
                <Slider {...settings}>
                  <div className="col-sm-12"><img src="https://picsum.photos/300/200?random=1" alt="image" /></div>
                  <div className="col-sm-12"><img src="https://picsum.photos/300/200?random=2" alt="image" /></div>
                  <div className="col-sm-12"><img src="https://picsum.photos/300/200?random=3" alt="image" /></div>
                  <div className="col-sm-12"><img src="https://picsum.photos/300/200?random=4" alt="image" /></div>
                  <div className="col-sm-12"><img src="https://picsum.photos/300/200?random=5" alt="image" /></div>
                  <div className="col-sm-12"><img src="https://picsum.photos/300/200?random=6" alt="image" /></div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-5 blue-bg text-white text-center py-5">

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center ">

                <ul className="ftco-footer-social py-2">
                  <li className="ftco-animate">
                    <a data-social-platform="Facebook" target="_blank" href="https://www.facebook.com/CompleteUniversityGuide/ "><img src="https://images-dom.aws.test.idp-connect.com/cug-cont/images/facebook_icon.svg" alt="Facebook" /></a>
                  </li>
                  <li className="ftco-animate">
                    <a data-social-platform="Twitter" target="_blank" href="https://twitter.com/compuniguide"><img src="https://images-dom.aws.test.idp-connect.com/cug-cont/images/twitter_icon.svg" alt="Twitter" /></a>
                  </li>
                  <li className="ftco-animate">
                    <a data-social-platform="Instagram" target="_blank" href="https://www.instagram.com/compuniguide/"><img src="https://images-dom.aws.test.idp-connect.com/cug-cont/images/instagram_icon.svg" alt="Instagram" /></a>
                  </li>
                  <li className="ftco-animate">
                    <a data-social-platform="Linkedin" target="_blank" href="https://www.linkedin.com/company/the-complete-university-guide/"><img src="https://images-dom.aws.test.idp-connect.com/cug-cont/images/linkedin_icon.svg" alt="Linkedin" /></a>
                  </li>
                </ul>


                <ul className="menu pb-2">
                  <li className="px-sm-4 px-2"><a data-footer-links="About Us" href="/about-us">About us</a></li>
                  <li className="px-sm-4 px-2"><a data-footer-links="Contact Us" href="/contact-us">Contact us</a></li>
                  <li className="px-sm-4 px-2"><a data-footer-links="B2B Category Landing" href="/sector">Resources for sector</a></li>
                  <li className="px-sm-4 px-2"><a data-footer-links="Clearing Landing Page" href="/clearing">Clearing</a></li>
                  <li className="px-sm-4 px-2"><a data-footer-links="COOKIES" href="/cookies">Cookies</a></li>
                  <li className="px-sm-4 px-2"><a data-footer-links="Privacy Policy" href="/terms-and-conditions/privacy-notice">Privacy notice</a></li>
                  <li className="px-sm-4 px-2"><a data-footer-links="Terms and Conditions" href="/terms-and-conditions">Terms and conditions</a></li>
                  <li className="px-sm-4 px-2"><a data-footer-links="Sitemap" href="/sitemap">Sitemap</a></li>
                </ul>


              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="copyright">
                  © Complete University Guide Limited 2024
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
