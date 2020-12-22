import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import { Youtube, FaceBook } from "../../components/Svgs/Socail";

function Footer(props) {
  const styles = css`
    grid-row: -1;
    grid-template-rows: 100px 100px 100px 100px;
    background-color: var(--black);

    color: var(--white);
    .links {
      grid-column: 2 / -2;
      grid-row: 1 / span 2;
      align-self: center;

      display: flex;
      flex-direction: column;

      a {
        color: var(--white);
      }
    }

    .contact-info {
      grid-column: 2 / -2;
      grid-row: 3;
    }

    .social {
      grid-column: 2 / -2;
      grid-row: 4;
    }
  `;
  return (
    <footer className="footer base-grid" css={styles}>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>
      </div>
      <div className="contact-info">
        <p> Call: 665 6343</p>
        <p>Email: sellingeasier@gmail.com</p>
      </div>
      <div className="social">
        <Youtube />
        <FaceBook />
      </div>
    </footer>
  );
}

export default Footer;
