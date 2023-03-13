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

	static readonly VideoContainer = styled.div<{height: number}>`
		height: ${props => props.height + 'px'};
		overflow: hidden;
		position: absolute;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-40%, -50%);
		z-index: -1;
		background-color: ${COLORS.PRIMARY};

		& > video {
			opacity: 0.3;
			/* background-color: ${COLORS.PRIMARY}; */
		}
	`
}
