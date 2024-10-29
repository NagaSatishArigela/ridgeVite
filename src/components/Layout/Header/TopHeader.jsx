import React from "react";
import { Link } from "react-router-dom";

const topContact = [
  {
    page: "kshetra",
    mobile: "7775857777",
    email: "Kshetra@ridgehomes.in",
  },
  {
    page: "sunrisecity",
    mobile: "9059059392",
    email: "myridgehome@gmail.com",
  },
  {
    page: "tranquilvalley",
    mobile: "8886033333",
    email: "tranquil@ridgehomes.in",
  },
  {
    page: "springcity",
    // mobile: '7396897737 ',
    mobile: "9000888152",
    email: "info@ridgehomes.in",
  },
];

function TopHeader() {
    const location = window.location.href.split("/");
    const locationMenu = location[location.length - 1];
    const contactDetails = topContact.find((item) => item.page === locationMenu);
    return (
      <div className="top-header text-center py-2.5 fixed top-0 w-full bg-white z-[999999999]">
        <div className="max-w-7xl mx-auto flex justify-end pr-2.5">
          <ul className="list-none m-0 p-0 flex items-center">
            <li className="px-2.5">
              <Link
                to={`tel:${contactDetails ? contactDetails.mobile : "9000888152"}`}
                className="text-inherit no-underline"
              >
                <i className="fa fa-phone"></i> +91{" "}
                {contactDetails ? contactDetails.mobile : "9000888152"}
              </Link>
            </li>
            <li className="px-2.5">
              <Link
                to={`mailto:${contactDetails ? contactDetails.email : "info@ridgehomes.in"}`}
                className="text-inherit no-underline"
              >
                <i className="fa fa-envelope"></i>{" "}
                {contactDetails ? contactDetails.email : "info@ridgehomes.in"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  

export default TopHeader;
