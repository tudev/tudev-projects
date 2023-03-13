import { Offcanvas } from 'react-bootstrap'
import styled from 'styled-components'
import { NAV_COLORS } from '../tools/Constants'
// import { NAV_COLORS } from '../tools/Constants'

export default class BannerStyles {

	static readonly OffcanvasContainer = styled(Offcanvas)`
	`

    static readonly HamburgerButton = styled.div<{colors: NAV_COLORS}>`
        border-radius: 4px;
        padding: calc(var(--vh) * 0.005);
        display: flex;
        align-items: center;
        margin-right: calc(var(--vh) * 0.01);
        color: ${props => props.colors.TEXT};
        transition: color 0.5s ease;

        &:hover {
            color: ${props => props.colors.HOVER};
            cursor: pointer;
        }

        & > svg {
            stroke-width: 0.5;
        }
    `

}
