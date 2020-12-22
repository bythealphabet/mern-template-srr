import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export const nav = css`
  z-index: 11;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: 1 / -1;
  grid-row: 1 / span 4;

  background: var(--lightBlue);

  @media (min-width: 900px) {
    background: transparent;

    font-size: 1.1rem;
    font-weight: bold;
    letter-spacing: 1.5px;
    grid-column: 5 / -2;
    grid-row: 1;
  }

  @media (min-width: 1110px) {
    /* font-size: 1rem; */
  }
`;

export const ulStyles = css`
  list-style: none;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 900px) {
    width: 100%;
    max-width: 900px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const liStyles = css`
  @media (min-width: 900px) {
    padding: 0.8em 0.8em 0 0.8em;

    border: none;
    text-align: center;
    text-transform: lowercase;

    :hover {
      background: transparent;
    }
  }
`;

export const aStyles = css`
  color: var(--black);
  font-weight: 900;
  @media (min-width: 900px) {
    color: var(--blue);
    font-weight: 400;
  }
`;

export const buttonStyleAddPath = css`
  @media (min-width: 900px) {
    background: transparent;
    padding: 0.5em 1.2em;
    border: solid 0.5px var(--green);
    border-radius: 5px;
    color: var(--green);
  }
`;

export const buttonStyle = css`
  @media (min-width: 900px) {
    border: solid 0.5px var(--green);
    border-radius: 5px;
    background: var(--green);
    padding: 0.5em 1.2em;
    transition: 0.5s ease;
    color: var(--white);

    :hover {
      ${buttonStyleAddPath}
    }
  }
`;

export const linkStyle = css`
  @media (min-width: 900px) {
    :after {
      display: block;
      content: " ";
      width: 100%;
      border-bottom: 0.5px solid;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    :hover::after {
      transform: scaleX(1);
    }
  }
`;

export const currentPageLink = css`
  :after {
    display: block;
    content: " ";
    width: 100%;
    border-bottom: 0.5px solid;
  }
`;
