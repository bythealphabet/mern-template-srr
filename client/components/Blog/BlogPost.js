import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import girlImg from "../../assets/images/succes-girl-afro.jpg";
import skillImg from "../../assets/images/skill.jpg";
import screamImg from "../../assets/images/scream-to-phone.jpg";

function BlogPosts({ title, text, img }) {
  const styles = css`
    grid-template-rows: 1fr 40px 50px 50px;
    grid-gap: 5px;
    margin-bottom: 4em;

    @media (min-width: 900px) {
      grid-template-rows: 1fr 1fr 20px 50px 50px;
    }

    h4 {
      grid-column: 2 / span 3;
      min-height: 90px;
      align-self: center;
      @media (min-width: 900px) {
        font-size: 2rem;
      }
    }

    p {
      grid-column: 2 / span 3;
      grid-row: 2 / span 2;

      span {
        color: var(--red);
      }

      @media (min-width: 900px) {
        font-size: 1.8rem;
        grid-column: 2 / span 4;
        grid-row: 2;
      }
    }

    .post-img {
      grid-column: 5 / -2;
      grid-row: 1 / span 3;
      width: 100%;

      img {
        width: 100%;
        object-fit: cover;
        border-radius: 10px;
      }

      @media (min-width: 900px) {
        grid-column: 8/ -2;
        grid-row: 1 / span 2;
        width: 100%;
      }
    }
  `;
  return (
    <div className="base-grid" css={styles}>
      <h4>{title}</h4>
      <p>
        {text} <span>...read more...</span>
      </p>
      <div className="post-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default BlogPosts;
