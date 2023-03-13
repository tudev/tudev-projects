// Third party imports
import React from 'react'

// Custom styles
import Styles from './NavigationStyles'
import { scrollToTop } from './tools/HelpfulFunctions'
import tudevLogo from './assets/logos/logo-red.png'
import { getNavColors, PATHS } from './tools/Constants'
import Banner from './components/Banner';

const Navigation = (): React.ReactElement => {
	const colors = getNavColors()

	return (
		<Styles.NavContainer style={{backgroundColor: colors.BACKGROUND}}>
			<Styles.NavigationContainer>
				<Styles.LogoContainer colors={colors} to={PATHS.RYAN_HODGE} onClick={scrollToTop}>
					<img alt='logo' src={tudevLogo}/>
					<p><b>TUDev</b></p>
				</Styles.LogoContainer>
				<Banner colors={colors}/>
			</Styles.NavigationContainer>
		</Styles.NavContainer>
	)
}

export default Navigation
