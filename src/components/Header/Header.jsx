import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img
            src="./heritage_assets/heritage-logo.png"
            alt="logo"
            width={150}
          />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            {/* <a
              href="https://vinceskycam.com/360/gamuda_t12_vr/"
              target="_blank"
            >
              Virtual View
            </a> */}

            <a href="#Layouts">Layout</a>

            <a href="#RegisterForm">Register</a>

            <button
              className="button"
              onClick={() => window.open("https://wa.link/yz9y03", "_blank")}
              style={{ fontSize: "15px", fontWeight: "300" }}
            >
              Get Quote
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
