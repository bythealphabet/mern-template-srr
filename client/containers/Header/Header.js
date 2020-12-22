import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { useLocation } from "react-router-dom";

import Hamburger from "../../components/Header/Hamburger";
import HeaderLogo from "../../components/Header/HeaderLogo";
import Menu from "../../components/Header/Menu";

const topNav = (props) => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
    props.isMenuActive(false);
  }, [location]);

  const hamburgerHandler = () => {
    props.isMenuActive(!active);
    setActive((prev) => !prev);
  };

  const navList = [
    { to: "/", page: "home" },
    { to: "/services", page: "services" },
    { to: "/blog", page: "blog" },
    { to: "/about", page: "about" },
    { to: "/contact", page: "contact" },
  ];

  const header = css`
    grid-template-rows: var(--headerHeight);
    grid-row: 1;

    @media (min-width: 900px) {
      grid-template-rows: 80px;
    }
  `;
  const logo = css`
    grid-column: 2 / span 2;
    grid-row: 1;
    align-self: center;

    display: flex;
    justify-content: start;
    align-items: center;

    img {
      object-fit: cover;
    }

    @media (min-width: 900px) {
      align-self: flex-end;
    }
  `;
  const hamburger = css`
    grid-column: 7 / span 1;
    justify-self: center;
    align-self: center;
  `;
  const menu = css`
    grid-column: 5 / -2;
    grid-row: 1;

    @media (min-width: 900px) {
      align-self: flex-end;
    }
  `;

  return (
    <header className="base-grid" css={header}>
      <HeaderLogo position={logo} />
      <Hamburger
        position={hamburger}
        active={active}
        setActive={hamburgerHandler}
      />
      <Menu position={menu} active={active} navList={navList} />
    </header>
  );
};

export default topNav;
