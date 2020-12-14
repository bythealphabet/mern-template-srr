//@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&family=Vollkorn:ital@0;1&display=swap')
// export const baseFontImport =
// 	"@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap')";
//
// export const headerImport =
// 	"@import url('https://fonts.googleapis.com/css2?family=Vollkorn:ital@0;1&display=swap')";

import { css } from "@emotion/core";

export const primaryFont = "'Open Sans', sans-serif";
export const secondaryFont = "'Vollkorn', serif";

export const typography = {
	header1: css`
		font-family: ${secondaryFont};
		font-size: 1.8rem;
		font-weight: normal;
		line-height: 1.3;
		font-style: italic;
	`,
	header2: ["1.888rem", "Vollkorn"],
	paragraph: ["1rem", "Open Sans"],
};
