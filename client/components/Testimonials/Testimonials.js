import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import TestimonialCard from "./TestimonialCard";
import { data } from "./data";

function Testimonials({ position }) {
  const main = css`
    ${position}
  `;

  return (
    <div css={main}>
      {data.map((testimonial, index) => {
        return (
          <TestimonialCard
            key={`${testimonial.name}${index}`}
            testimonial={testimonial}
          />
        );
      })}
    </div>
  );
}

export default Testimonials;
