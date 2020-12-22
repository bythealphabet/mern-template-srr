import { css } from "@emotion/react"; /** @jsx jsx */

const whoami = css`
  margin-top: 10em;
  grid-template-rows: 50px 60px 30px 10px auto 10px auto;
  @media (min-width: 900px) {
    grid-template-rows: 150px 60px 30px 10px auto 10px auto;
  }
`;

const imgStyles = css`
  border-radius: 50%;
  margin-left: 1em;
  grid-column: 5 / span 2;
  grid-row: 1 / span 3;
  justify-self: center;

  @media (min-width: 900px) {
    grid-column: 7 / span 4;
  }
`;

const nameText = css`
  font-size: 1rem;
  font-style: italic;

  grid-column: 2 / span 3;
  grid-row: 1 / span 2;
  align-self: center;

  @media (min-width: 900px) {
    font-size: 1.4rem;
    grid-column: 2 / span 8;
  }
`;

const bodyText = css`
  grid-column: 2 / -2;
  grid-row: 5;

  span {
    font-weight: 700;
  }

  @media (min-width: 900px) {
    font-size: 1.4rem;
    grid-column: 2 / span 4;
  }
`;

const tail = css`
  grid-column: 2 / -2;
  grid-row: -1;
  span {
    font-weight: 700;
  }

  @media (min-width: 900px) {
    font-size: 1.4rem;
    grid-column: 2 / span 4;
  }
`;

export default { whoami, imgStyles, nameText, bodyText, tail };
