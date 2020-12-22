import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function Substract({ position }) {
  const styles = css`
    ${position}
    svg {
      fill: var(--lightBlue);
      width: 100%;
    }
  `;
  return (
    <div css={styles}>
      <svg
        width="320"
        height="289"
        viewBox="0 0 320 189"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.00942 0H0V289H320V0H318.991C277.466 31.0026 221.53 50 160 50C98.4699 50 42.5343 31.0026 1.00942 0Z"
        />
      </svg>
    </div>
  );
}

export default Substract;
