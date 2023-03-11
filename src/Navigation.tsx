// Third party imports
import React from 'react'

// Custom styles
import Styles from './NavigationStyles'
import { scrollToTop } from './tools/HelpfulFunctions'
import tudevLogo from './assets/logos/logo-red.png'
import { PATHS } from './tools/Constants'

import { RxHamburgerMenu } from 'react-icons/rx'


const RyanHodge = (): React.ReactElement => {
	return (
		<Styles.NavigationContainer>
			<Styles.LogoContainer to={PATHS.RYAN_HODGE} onClick={scrollToTop}>
				<img alt='logo' src={tudevLogo}/>
				<p>TUDev</p>
			</Styles.LogoContainer>
			<Styles.HamburgerButton>
				<RxHamburgerMenu size={'25px'}/>
			</Styles.HamburgerButton>
		</Styles.NavigationContainer>
	)
}

export default RyanHodge
