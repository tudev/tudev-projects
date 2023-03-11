import styled, { createGlobalStyle } from 'styled-components'
import { COLORS } from './tools/Constants'

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: black;
		color: ${COLORS.TEXT};
	}

	body > * > p {
		color: ${COLORS.TEXT};
	}
`


export default class AppStyles {

	static readonly AppContainer = styled.div`
	`

	static readonly NavContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: calc(var(--vh) * 0.04);
	`
}
