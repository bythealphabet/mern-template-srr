import { css } from "@emotion/react"; /** @jsx jsx */

const questions = css`
  background-color: var(--pink);
  grid-template-rows: 100px 50px 40px 50px;
  margin-top: 4em;

  @media (min-width: 900px) {
    grid-template-rows: 100px 250px 250px 40px 50px;
  }
`;

const questionMark = css`
  grid-column: 6 / -2;
  grid-row: 1 / -2;
  align-self: center;
  justify-self: center;

  @media (min-width: 900px) {
    grid-column: 8 / -2;
    grid-row: 2;
  }
`;

const text = css`
  grid-column: 2 / span 4;
  grid-row: 1 / -2;
  align-self: center;
  color: var(--black);

  @media (min-width: 900px) {
    font-size: 3rem;
  }
`;
const btn = css`
  grid-column: 2 / span 4;
  grid-row: 4;
  align-self: start;
  justify-self: start;
  background-color: var(--black);
  color: var(--white);
  border: solid 2px var(--black);
  font-weight: 900;
  padding: 0.8em 1.8em;

  :hover,
  :focus {
    background-color: var(--white);
    color: var(--black);
    border: solid 2px var(--black);
  }

  @media (min-width: 900px) {
    font-size: 2.5rem;
    grid-column: 8 / -2;
    grid-row: 3;
    justify-self: center;
  }
`;
export default { questions, text, questionMark, btn };
