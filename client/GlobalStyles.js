import React from "react";
import { Global, css } from "@emotion/react";

function GlobalStyles(props) {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&display=swap");
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        :root {
          --headerHeight: 100px;
          --white: #fff;
          --black: #5b5f6a;
          --red: #7c3c40;
          --pink: #dc5a6a;
          --lightBlue: #b4d2dd;
          --green: #65a244;
        }
        body,
        html {
          font-family: "Lato", sans-serif;
          font-size: 1rem;
          color: #404040;
          line-height: 1.6;
          background-color: var(--white);
        }

        /* #root {
          overflow-x: hidden;
          position: relative;
          height: 100%;
        } */

        img {
          max-height: 100%;
          display: block;
        }

        a {
          color: var(--black);
          text-decoration: none;
        }

        h3 {
          color: var(--red);
          font-size: 1.2rem;
          font-weight: 900;
          grid-column: 2 / span 3;
          grid-row: 2;
          align-self: center;
        }

        input,
        .btn {
          /* height: 30px; */
          border-radius: 5px;
        }

        input {
          font-family: inherit;
          text-align: inherit;
          margin-bottom: 0.75em;
          padding: 0.25em;
          border: solid 1px var(--black);
          transform: scale(1);
          transition: transform 0.25s ease;
        }

        input:focus {
          transform: scale(1.03);
        }

        .btn {
          display: inline-block;
          padding: 0.4em 1.3em;
          font-size: 0.625rem;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 1px;
          border: 0;
          cursor: pointer;
        }

        .base-grid {
          display: grid;
          grid-template-columns:
            minmax(1em, 1fr) repeat(6, minmax(30px, 125px))
            minmax(1em, 1fr);
          @media (min-width: 900px) {
            grid-template-columns:
              minmax(5em, 1fr) repeat(12, minmax(50px, 105px))
              minmax(5em, 1fr);
          }
        }
      `}
    />
  );
}

export default GlobalStyles;
