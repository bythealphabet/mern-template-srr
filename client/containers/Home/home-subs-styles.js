import { css } from "@emotion/react"; /** @jsx jsx */

const subsGrid = css`
  margin-top: 5em;

  grid-template-rows: 50px 160px 70px 50px;
  @media (min-width: 500px) {
    grid-template-rows: 100px 160px 20px 50px 50px 1fr;
  }
  @media (min-width: 900px) {
    grid-template-rows: 80px 180px 20px 20px 70px 1fr;
    background-color: var(--lightBlue);
  }
`;

const ellipse = css`
  display: flex;
  align-items: center;
  grid-column: 1 / -1;
  grid-row: 1/ -1;

  @media (min-width: 900px) {
    grid-column: 1 / span 8;
  }

  @media (min-width: 1120px) {
    grid-column: 1 / span 10;
  }
`;

const subsTextBox = css`
  grid-column: 2 / -2;
  grid-row: 2 / span 2;
  @media (min-width: 500px) {
    grid-column: 2 / span 4;
  }
  @media (min-width: 900px) {
    grid-column: 2 / span 6;
    p {
      font-size: 1.3rem;
    }
  }
`;

const subsHeader = css`
  color: var(--black);
  font-size: 1.5rem;
  font-weight: 900;
  grid-row: 1;
  grid-column: 2 / 2;
  @media (min-width: 500px) {
    font-size: 2rem;
  }
`;

const actionText = css`
  margin-top: 1em;
  font-weight: 700;
  color: var(--green);
  @media (min-width: 500px) {
  }
`;

const form = css`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 4;
  grid-row: 3;
  label {
    font-weight: 700;
  }
  input {
    height: 30px;
  }

  button {
    align-self: flex-start;
    font-size: 0.8rem;
    background-color: var(--green);
    color: var(--white);
  }
  @media (min-width: 500px) {
    grid-column: 2 / span 3;
    grid-row: 4;
  }
  @media (min-width: 900px) {
    grid-column: 2 / span 3;
    grid-row: 5;
    input {
      height: 60px;
      padding: 0.8em;
    }

    button {
      font-size: 1rem;
    }
  }
`;
export default { subsGrid, ellipse, subsHeader, subsTextBox, actionText, form };
