import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const HeaderLogo = ({ position }) => {
  const style = css`
    z-index: 10;
    /*height: 100%;*/
    width: 100%;
    img {
      /* height: 100%; */
      width: 100px;
    }
    @media (min-width: 900px) {
    }
  `;
  return (
    <Link
      to="/"
      css={css`
        ${style} ${position}
      `}
    >
      <img src={logo} alt="solargard logo" />
    </Link>
  );
};

export default HeaderLogo;
