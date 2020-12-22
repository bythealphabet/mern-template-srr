import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import {
	nav,
	ulStyles,
	liStyles,
	aStyles,
	buttonStyleAddPath,
	buttonStyle,
	linkStyle,
	currentPageLink,
} from "./NavBarStyles";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ active, navList = [] }) => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<nav css={nav}>
			<ul css={ulStyles}>
				{navList.map((link, index) => {
					return (
						<li key={`${link.to}${link.page}`} css={liStyles}>
							<Link
								to={link.to}
								css={css`
									${aStyles}
									${pathname === link.to
										? currentPageLink
										: linkStyle}
								`}
							>
								{link.page}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
