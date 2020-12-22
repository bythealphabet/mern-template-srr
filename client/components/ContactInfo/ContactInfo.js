import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

const mainStyles = css`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 1rem;
`;

const bold = css`
  font-weight: 900;
`;

const top = css`
  font-size: 1.2rem;
  color: var(--white);
  margin-right: 0.5em;
`;

export function EmailInfo({ position, topColor }) {
  const section = css`
    ${mainStyles}
    ${position}
  `;

  const title = css`
    ${top}
    ${topColor}
  `;

  return (
    <div css={section}>
      <p css={title}>Email</p>
      <p css={bold}>sellingeasier@gmail.com</p>
    </div>
  );
}

export function PhoneNumbers({ position, topColor }) {
  const section = css`
    ${mainStyles}
    ${position}
  `;

  const title = css`
    ${top}
    ${topColor}
  `;

  return (
    <section css={section}>
      <p css={title}>Call:</p>
      <p>(599) 665 6343</p>
    </section>
  );
}

export function Adress({ position, topColor }) {
  const section = css`
    ${mainStyles}
    ${position}
  `;

  const title = css`
    ${top}
    ${topColor}
  `;
  return (
    <section css={section}>
      <p css={title}>Address:</p>
      <p> Groot Davelaar kavel 12 B Curaçao, Dutch Caribbean</p>
    </section>
  );
}
