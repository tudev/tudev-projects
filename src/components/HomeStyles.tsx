import styled from 'styled-components'
import { COLORS } from '../tools/Constants'

export default class HomeStyles {
	static readonly HomeContainer = styled.div<{height: number}>`
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: ${props => props.height + 'px'};
	`

	static readonly Header = styled.div`
		text-align: center;
		align-self: center;
	`

	static readonly VideoContainer = styled.div<{height: number, width: number}>`
		height: ${props => props.height + 'px'};
		width: 100%;
		overflow: hidden;
		position: absolute;
		z-index: -1;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: ${props => props.width <= 680 ? COLORS.BACKGROUND : COLORS.PRIMARY};
		object-fit: contain;

		& > video {
			opacity: 0.3;
			overflow: hidden;
			position: absolute;
			top: 0;
			left: 0;
			display: ${props => props.width <= 680 ? 'none' : 'block'};
			/* width: var(--vh); */
		}
	`
}
