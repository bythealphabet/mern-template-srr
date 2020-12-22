import { css } from "@emotion/react"; /** @jsx jsx */

const testimonialsGrid = css`
  margin-top: 8em;
  margin-bottom: 8em;
  grid-template-rows: 60px 40px 100px auto;
`;

const substract = css`
  grid-column: 1 / -1;
  grid-row: 1;
`;

const background = css`
  background-color: var(--lightBlue);
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;
const heading = css`
  color: var(--red);
  font-size: 1.5rem;
  font-weight: 900;
  grid-column: 2 / span 3;
  grid-row: 2;
  align-self: center;
  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

const subHeading = css`
  grid-column: 2 / span 3;
  grid-row: 3;
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 2em;
`;

const testimonials = css`
  grid-column: 1 / -1;
  grid-row: 4;
`;

export default {
  testimonialsGrid,
  substract,
  heading,
  subHeading,
  testimonials,
  background,
};
