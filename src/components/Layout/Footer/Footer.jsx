import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/ridgeNewLogo.webp";

function Footer() {
  return (
    <>
      <footer className="bg-[#222] py-8 font-gordita-regular">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-white">
          <div className="mb-8 md:mb-0">
            <div className="inline-flex items-center">
              <Link to="/">
                <img src={logo} alt="logo" className="h-[70px] mt-[50px]" />
              </Link>
              <p className="text-xs ml-2 mt-[30px] font-gordita-regular">
                ISO{" "}
                <span className="relative font-gordita-regular">
                  Certified
                  <br />
                  <span className="absolute right-0 font-gordita-regular">9001:2015</span>
                </span>
              </p>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 font-gordita-regular">RIDGE HOMES</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:opacity-90 font-gordita-regular">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:opacity-90 font-gordita-regular">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:opacity-90 font-gordita-regular">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:opacity-90 font-gordita-regular">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:opacity-90 font-gordita-regular">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 font-gordita-regular">PROJECTS</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projects/onGoingProjects"
                  className="hover:opacity-90 font-gordita-regular"
                >
                  Ongoing Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/completedProjects"
                  className="hover:opacity-90 font-gordita-regular"
                >
                  Completed Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 font-gordita-regular">CONTACT US</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:9000888152" className="hover:opacity-90">
                  <i className="fa fa-phone mr-2 font-gordita-regular"></i>+91 9000888152
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ridgehomes.in"
                  className="hover:opacity-90 font-gordita-regular"
                >
                  info@ridgehomes.in
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-gordita-regular">FOLLOW ON</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/myridgehomes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/MyRidgeHomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/myridgehomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCwZpttLAxA1j6_pmoc_MInA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/myridgehomes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#1a1a1a] text-white py-3 text-center font-gordita-regular">
        &#169; RIDGE HOMES LLP
      </div>
    </>
  );
}

export default Footer;
