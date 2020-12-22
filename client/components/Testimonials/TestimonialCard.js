import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */

function TestimonialCard(props) {
  const { name, img, business, testimonial } = props.testimonial;
  const styles = css`
    margin-bottom: 4em;
    grid-template-rows: 5px 30px 30px 30px 10px auto;

    .testimonial-name,
    .testimonial-position,
    .testimonial-company,
    .testimonial-story {
      grid-column: 2 / span 4;
      @media (min-width: 900px) {
        font-size: 1.5rem;
      }
    }

    .testimonial-name {
      grid-row: 2;
    }

    .testimonial-position {
      grid-row: 3;
    }

    .testimonial-company {
      grid-row: 4;
    }

    .testimonial-story {
      grid-row: -1;
      font-style: italic;
      @media (min-width: 900px) {
        font-size: 1.2rem;
      }
    }

    .testimonial-img {
      width: 100px;
      height: 100px;
      grid-column: 6 / -2;
      grid-row: 1 / span 3;
      justify-self: end;

      border-radius: 50%;
      background-image: url(${img});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      @media (min-width: 900px) {
        grid-column: 4 / span 6;
        width: 200px;
        height: 200px;
      }
    }
  `;

  return (
    <div className="base-grid" css={styles}>
      <h4 className="testimonial-name">{name}</h4>
      {/* <p className="testimonial-position">{business}</p> */}
      <p className="testimonial-company">{business}</p>
      <article className="testimonial-story">
        <p>{testimonial}</p>
      </article>
      <div className="testimonial-img"></div>
    </div>
  );
}

export default TestimonialCard;
