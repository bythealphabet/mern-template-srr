import { css } from "@emotion/core";

export const baseBtn = css`
	display: inline-block;
	font-size: 1rem;
	padding: 0.3em 1.2em;
	font-weight: 900;
	color: var(--white);
	letter-spacing: 1px;
	text-align: center;
	/*background-color: var(--green);*/
	/*border:solid 2px var(--white)*/
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s ease;

	/*:hover,
	:focus {
		background-color: var(--white);
		color: var(--green);
		border: solid 2px var(--green);
	}*/
`;
