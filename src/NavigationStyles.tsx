import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NAV_COLORS } from './tools/Constants'


export default class NavigationStyles {

	static readonly NavContainer = styled.div`
		width: 100%;
		position: fixed;
		top: 0;
		display: grid;
		grid-template-columns: 10% 80% 10%;
		grid-template-rows: 50px;
		transition: background-color 0.5s ease;
		z-index: 1000;
	`

	static readonly NavigationContainer = styled.div`
		grid-column: 2;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	`
	
	static readonly LogoContainer = styled(Link)<{colors: NAV_COLORS}>`
		display: flex;
		flex-direction: row;
		height: 55%;
		width: 120px;
		column-gap: 5%;
		color: ${props => props.colors.TEXT};
		transition: color 0.5s ease;
		text-decoration: none;

		&:hover {
			color: ${props => props.colors.HOVER};
			cursor: pointer;
		}

		& > p {
			margin: 0;
			align-self: center;
			font-size: 18px;
			font-family: 'Roboto', 'Helvetica', 'Arial', 'sans-serif';
			letter-spacing: 1px;
			margin-left: 15px;
		}
	`
}
