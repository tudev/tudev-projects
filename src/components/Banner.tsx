// Third party imports
import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from 'react-icons/rx'
import { NAV_COLORS } from '../tools/Constants';

// Custom styles
import Styles from './BannerStyles'

class Banner extends React.Component <{colors: NAV_COLORS}, { show: boolean }> {

    constructor(props: {colors: NAV_COLORS}) {
        super(props)
        this.state = { show: false }
    }

    handleClose = (): void => {this.setState({ show: false })}
    handleShow = (): void => {this.setState({ show: true })}

	render () {
		return (
            <>
                <Styles.HamburgerButton colors={this.props.colors} onClick={this.handleShow}>
					<RxHamburgerMenu size={'25px'}/>
				</Styles.HamburgerButton>

                <Styles.OffcanvasContainer show={this.state.show} onHide={this.handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{color: 'black'}}>Parameters</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <p>sdlkjfsl</p>
                    </Offcanvas.Body>
                </Styles.OffcanvasContainer>
            </>
		)
	}
}

export default Banner
