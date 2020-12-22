import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function Ellipse({ position }) {
  const style = css`
    /* padding: 0;
    padding-bottom: 90%; */
    ${position}

    svg {
      width: 100%;
      height: auto;
      max-height: 400px;

      @media (min-width: 500px) {
        #ellipse {
          cx: 0;
          rx: 100%;
        }
      }

      @media (min-width: 900px) {
        max-height: 500px;
        #ellipse {
          cx: 10;
          rx: 100%;
        }
      }
      @media (min-width: 1200px) {
        #ellipse {
          cx: 100;
        }
      }
    }
  `;
  return (
    <div css={style}>
      <svg
        width="0"
        height="0"
        viewBox="0 0 320 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          id="ellipse"
          cx="146"
          cy="168"
          rx="240"
          ry="168"
          fill="#B4D2DD"
          // fillOpacity="0.7"
        />
      </svg>
    </div>
  );
}

export default Ellipse;
