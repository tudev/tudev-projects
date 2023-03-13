import styled, { createGlobalStyle } from 'styled-components'
import { COLORS } from './tools/Constants'

export const GlobalStyles = createGlobalStyle`
	body {
		font-family: 'Roboto', 'Helvetica', 'Arial', 'sans-serif';
		background-color: ${COLORS.BACKGROUND};
	}
`


export default class AppStyles {
	static readonly OverallStyles = styled.div`
		color: ${COLORS.TEXT};
	`

	static readonly AppContainer = styled.div<{height: number}>`
		height: 5000px;
		display: grid;
		grid-template-columns: 10% 80% 10%;
		grid-template-rows: 50px;

		& > * {
			grid-row: 2;
			grid-column: 2;
		}
	`
}
