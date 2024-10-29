import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import logo from "../../../assets/images/ridgeNewLogo.webp";
import useScreenSize from "../../../hooks/useScreenSize";

const menuItems = [
  { title: "Home", link: "" },
  {
    title: "Projects",
    link: "projects",
    submenu: [
      {
        title: "Ongoing Projects",
        link: "projects/onGoingProjects",
        submenu: [
          { title: "Kshetra", link: "open-plots-in-shankarpally/kshetra" },
          {
            title: "Tranquil Valley",
            link: "open-plots-in-maheshwaram/tranquilvalley",
          },
        ],
      },
      {
        title: "Completed Projects",
        link: "projects/completedProjects",
        submenu: [
          { title: "Spring City", link: "projects/springcity" },
          {
            title: "Sunrise City",
            link: "plots-in-sultanpur-hyderabad/sunrisecity",
          },
        ],
      },
    ],
  },
  { title: "About Us", link: "about-us/" },
  { title: "Contact Us", link: "contactus" },
  { title: "Blog", link: "blogs/" },
  { title: "Careers", link: "careers/" },
  { title: "ISO Certified", link: "iso-certified" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile, isTablet } = useScreenSize();

  const isMobileOrTablet = isMobile || isTablet;

  return (
    <>
      <TopHeader />
      <header className="bg-[#151b26] fixed w-full top-[43px] z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="logo">
            <img src={logo} alt="Ridge Homes logo" className="h-[70px]" loading="lazy"/>
          </Link>
          {isMobileOrTablet && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          )}
          <nav
            className={`menu ${
              isMobileOrTablet
                ? "absolute top-full left-0 w-full bg-[#151b26]"
                : ""
            } 
            ${menuOpen || !isMobileOrTablet ? "block" : "hidden"}`}
          >
            <ul
              className={`list-none p-0 m-0 items-center gap-6 ${
                isMobileOrTablet ? "flex flex-col w-full" : "flex"
              }`}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  isMobileOrTablet={isMobileOrTablet}
                  closeMenu={() => setMenuOpen(false)}
                  depthLevel={0}
                />
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

const MenuItem = ({ item, isMobileOrTablet, closeMenu, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    if (dropdown) {
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
    } else {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    }
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMenuClick = (e) => {
    if (isMobileOrTablet && item.submenu) {
      // Prevent default navigation and toggle submenu for all menu items with submenus
      e.preventDefault();
      setDropdown((prev) => !prev);
    } else if (!item.submenu) {
      closeMenu(); // Close menu for single items without submenus
    }
  };

  const onMouseEnter = () => {
    if (!isMobileOrTablet) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (!isMobileOrTablet) {
      setDropdown(false);
    }
  };

  const activeStyle = {
    color: "#DD9c37",
    fontWeight: "bold",
  };

  if (item.submenu) {
    return (
      <li
        className={`relative group ${depthLevel > 0 ? "submenu-item" : ""} ${
          isMobileOrTablet ? "w-full" : ""
        }`}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <NavLink
          to={`/${item.link}`}
          className={`text-white uppercase py-4 px-4 hover:text-[#dd9c37] hover:font-bold block ${
            isMobileOrTablet ? "w-full text-center" : ""
          }`}
          onClick={onMenuClick}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          {item.title}{" "}
          {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
        </NavLink>
        <Dropdown
          submenus={item.submenu}
          dropdown={dropdown}
          depthLevel={depthLevel}
          isMobileOrTablet={isMobileOrTablet}
          closeMenu={closeMenu}
        />
      </li>
    );
  }

  if (item.title === "ISO Certified") {
    return (
      <li className={`py-4 px-4 ${isMobileOrTablet ? "w-full" : ""}`}>
        <NavLink
          to={`/${item.link}`}
          className={`text-[#DD9c37] font-bold uppercase no-underline hover:text-[#dd9c37] block ${
            isMobileOrTablet ? "text-center" : ""
          }`}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.title}
          <span>9001:2015</span>
        </NavLink>
      </li>
    );
  }

  return (
    <li className={`py-4 px-4 ${isMobileOrTablet ? "w-full" : ""}`}>
      <NavLink
        to={`/${item.link}`}
        onClick={closeMenu}
        className={`text-white uppercase no-underline hover:text-[#dd9c37] hover:font-bold block ${
          isMobileOrTablet ? "text-center" : ""
        }`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {item.title}
      </NavLink>
    </li>
  );
};

const Dropdown = ({
  submenus,
  dropdown,
  depthLevel,
  isMobileOrTablet,
  closeMenu,
}) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul
      className={`
        dropdown ${dropdownClass} bg-[#151b26] min-w-[260px] 
        transition-opacity duration-300 ease-in-out transform 
        ${dropdown ? "opacity-100 visible" : "opacity-0 invisible"} 
        ${
          isMobileOrTablet
            ? dropdown
              ? "block"
              : "hidden"
            : "absolute hidden group-hover:block"
        }
        ${depthLevel > 1 ? "left-full top-0" : "left-0 top-full"}
      `}
    >
      {submenus.map((submenu, index) => (
        <MenuItem
          key={index}
          item={submenu}
          depthLevel={depthLevel}
          isMobileOrTablet={isMobileOrTablet}
          closeMenu={closeMenu}
        />
      ))}
    </ul>
  );
};

export default Header;
