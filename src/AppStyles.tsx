import styled, { createGlobalStyle } from 'styled-components'
import { COLORS } from './tools/Constants'

export const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'Roboto', 'Helvetica', 'Arial', 'sans-serif';
	}
`


export default class AppStyles {

	static readonly OverallStyles = styled.div`
		background-color: ${COLORS.BACKGROUND};
		color: ${COLORS.TEXT};
	`

	static readonly AppContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: calc(var(--vh) * 2);
	`
}
