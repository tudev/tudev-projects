import { Offcanvas } from 'react-bootstrap'
import styled from 'styled-components'
import { NAV_COLORS } from '../tools/Constants'
import BGPattern from '../assets/bg-pattern1.png'
import { Link } from 'react-router-dom'

export default class BannerStyles {
	static readonly OffcanvasContainer = styled(Offcanvas)`
        background-image: url(${BGPattern});
	`

    static readonly OffcanvasBody = styled(Offcanvas.Body)`
        display: flex;
        flex-direction: column;
        padding: 0;
        & > .first {
            border-top: 1px solid #00000088;
        }
    `

    static readonly LinkCont = styled(Link)`
        padding: 2%;
        padding-left: 10%;
        transition: background-color 0.5s ease;
        color: black;
        text-decoration: none;
        border-bottom: 1px solid #00000088;

        &:hover {
            background-color: #00000044;
            color: black;
        }
    `

    static readonly HamburgerButton = styled.div<{colors: NAV_COLORS}>`
        border-radius: 4px;
        padding: calc(var(--vh) * 0.005);
        display: flex;
        align-items: center;
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
