// Third party imports
import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from 'react-icons/rx'
import { NAV_COLORS, PATHS } from '../tools/Constants';
import { scrollToTop } from '../tools/HelpfulFunctions';

// Custom styles
import Styles from './BannerStyles'

class Banner extends React.Component <{colors: NAV_COLORS}, { show: boolean }> {

    constructor(props: {colors: NAV_COLORS}) {
        super(props)
        this.state = { show: false }
    }

    handleClose = (): void => {this.setState({ show: false })}
    handleShow = (): void => {this.setState({ show: true })}
    handleLink = (): void => {
        this.handleClose()
        scrollToTop()
    }

	render () {
		return (
            <>
                <Styles.HamburgerButton colors={this.props.colors} onClick={this.handleShow}>
					<RxHamburgerMenu size={'25px'}/>
				</Styles.HamburgerButton>

                <Styles.OffcanvasContainer show={this.state.show} onHide={this.handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{color: 'black'}}>Student Projects</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Styles.OffcanvasBody>
                        <Styles.LinkCont className='first' to={PATHS.RYAN_HODGE} onClick={this.handleLink}>Ryan Hodge</Styles.LinkCont>
                        <Styles.LinkCont to={PATHS.RYAN_HODGE} onClick={this.handleLink}>Ryan Hodge</Styles.LinkCont>
                        <Styles.LinkCont to={PATHS.RYAN_HODGE} onClick={this.handleLink}>Ryan Hodge</Styles.LinkCont>
                    </Styles.OffcanvasBody>
                </Styles.OffcanvasContainer>
            </>
		)
	}
}

export default Banner
