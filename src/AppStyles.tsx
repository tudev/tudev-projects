import styled, { createGlobalStyle } from 'styled-components'
import { COLORS } from './tools/Constants'

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${COLORS.BACKGROUND};
		color: ${COLORS.TEXT};
		font-family: 'Roboto', 'Helvetica', 'Arial', 'sans-serif';
	}
`


export default class AppStyles {

	static readonly AppContainer = styled.div`
		color: ${COLORS.TEXT};
	`

	static readonly NavContainer = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: max(calc(var(--vh) * 0.04), 40px) calc(var(--vh) * 1.2);

		& > .content {
			grid-row: 2;
		}
	`
}
