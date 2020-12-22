import { css } from "@emotion/react"; /** @jsx jsx */
import hero from "../../assets/images/hero.png";

const heroGrid = css`
  grid-template-rows: 50px 130px 80px 80px;

  grid-column: 1 / span 2;
  grid-row: 1;
  @media (min-width: 550px) {
    grid-template-rows: 80px 130px 80px 150px;
  }

  @media (min-width: 900px) {
    grid-template-rows: 80px 130px 80px 100px 150px;
  }
  @media (min-width: 1120px) {
    height: 75vh;
    grid-template-rows: 150px 130px 80px 100px 180px 1fr;
  }
`;

const heroImg = css`
  background-image: url(${hero});
  background-size: cover;
  background-position: 10% 0;
  background-repeat: no-repeat;
  grid-column: 1 / -1;
  grid-row: 1 / span 4;
  @media (min-width: 550px) {
    background-position: 10% 80%;
    grid-row: 1 / -1;
  }
  @media (min-width: 1120px) {
    grid-column: 4 / -1;
    grid-row: 1 / -1;

    background-position: 30% 70%;
`;

const heroHeader = css`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--red);
  line-height: 1.3;

  grid-column: 2 / span 2;
  grid-row: 2;
  span{
    color: var(--green);
    font-weight: 900;
  }
  @media (min-width: 550px) {
    font-size: 1.5rem;
  grid-column: 2 / span 3;
  
  @media (min-width: 900px) {
    font-size: 2rem;
  grid-column: 2 / span 3;
  @media (min-width: 1200px) {
    font-size: 3rem;
  grid-column: 2 / span 3;
`;

const actionBtn = css`
  background: var(--pink);
  border: solid 2px var(--pink);
  color: var(--white);
  font-weight: 900;

  grid-column: 2 / span 3;
  grid-row: 3;
  justify-self: start;
  align-self: center;

  :hover,
  :focus {
    background-color: var(--white);
    color: var(--green);
    border: solid 2px var(--green);
  }
  @media (min-width: 550px) {
    margin-top: 2em;
  }
  @media (min-width: 900px) {
    font-size: 1rem;

    grid-row: 4;
    align-self: center;
  }
  @media (min-width: 1200px) {
    font-size: 1.5rem;
  grid-column: 2 / span 3;
  grid-row:5;
`;

export default { heroGrid, heroImg, heroHeader, actionBtn };
