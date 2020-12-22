import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Youtube, FaceBook } from "../../Svgs/Socail";
const MobileMenu = ({ active, navList = [] }) => {
  const styles = css`
    color: var(--white);
    font-weight: 900;
    grid-column: 2 / -2;
    grid-row: 6 / -1;

    .social {
      margin: 1em 0;
      width: 90px;
      display: flex;
      justify-content: space-between;
    }
  `;
  return (
    <div css={styles}>
      <p>Email: sellingeasier@gmail.com </p>
      <p>Call: (599) 665 6343</p>

      <div className="social">
        <Youtube />
        <FaceBook />
      </div>
    </div>
  );
};

export default MobileMenu;
