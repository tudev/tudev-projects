import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class NavigationStyles {

	static readonly NavigationContainer = styled.div`
		position: fixed;
		top: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #741928;
		height: max(calc(var(--vh) * 0.04), 40px);
		width: 100%;
	`
	
	static readonly LogoContainer = styled(Link)`
		display: flex;
		flex-direction: row;
		height: 70%;
		width: min(calc(var(--vh) * 0.08), 100px);
		justify-content: space-between;
		column-gap: 5%;
		color: #ffffffb3;
		transition: color 0.5s ease;
		text-decoration: none;
		margin-left: calc(var(--vh) * 0.02);

		&:hover {
			color: white;
			cursor: pointer;
		}

		& > p {
			margin: 0;
			align-self: center;
		}
	`

	static readonly HamburgerButton = styled.div`
		background-color: #741928;
		border: 1px solid #52111c73;
		border-radius: 4px;
		padding: calc(var(--vh) * 0.005);
		display: flex;
		align-items: center;
		margin-right: calc(var(--vh) * 0.01);
		transition: background-color 0.5s ease;

		&:hover {
			background-color: #52111c;
			cursor: pointer;
		}
	`
}
