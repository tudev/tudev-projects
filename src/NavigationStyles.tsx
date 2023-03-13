import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NAV_COLORS } from './tools/Constants'


export default class NavigationStyles {

	static readonly NavigationContainer = styled.div`
		position: fixed;
		top: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		transition: background-color 0.5s ease;
		height: max(calc(var(--vh) * 0.04), 40px);
		width: 100%;
		z-index: 1000;
	`
	
	static readonly LogoContainer = styled(Link)<{colors: NAV_COLORS}>`
		display: flex;
		flex-direction: row;
		height: 70%;
		width: max(calc(var(--vh) * 0.1), 100px);
		justify-content: space-between;
		column-gap: 5%;
		color: ${props => props.colors.TEXT};
		transition: color 0.5s ease;
		text-decoration: none;
		margin-left: calc(var(--vh) * 0.02);

		&:hover {
			color: ${props => props.colors.HOVER};
			cursor: pointer;
		}

		& > p {
			margin: 0;
			align-self: center;
			font-size: max(calc(var(--vh) * 0.02), 20px);
		}
	`
}
