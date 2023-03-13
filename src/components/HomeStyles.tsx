import styled from 'styled-components'
import { COLORS } from '../tools/Constants'

export default class HomeStyles {

	static readonly HomeContainer = styled.div<{height: number}>`
		height: 100%;
		display: grid;
		grid-template-columns: 10% 80% 10%;
		grid-template-rows:
			${props => props.height + 'px'};
		`

	static readonly Header = styled.div`
		grid-column: 2;
		text-align: center;
		align-self: center;
	`

	static readonly VideoContainer = styled.div<{height: number}>`
		height: ${props => props.height + 'px'};
		overflow: hidden;
		position: absolute;
		& > video {
			opacity: 0.3;
			background-color: ${COLORS.PRIMARY};
		}
	`

}
