import { css } from "@emotion/react"; /** @jsx jsx */

const latestPost = css`
  margin-top: 4em;
  grid-template-rows: 60px 1fr;
`;

const heading = css`
  margin-bottom: 2em;
  grid-column: 2 / -2;
  grid-row: 1;
  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

const postBox = css`
  grid-column: 1 / -1;
  grid-row: 2;
`;

export default { latestPost, heading, postBox };
