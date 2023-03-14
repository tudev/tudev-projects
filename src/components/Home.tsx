// Third party imports
import React from 'react'
import { useWindowSize } from '../tools/HelpfulFunctions'

// Custom styles
import Styles from './HomeStyles'
import backgroundVideo from '../assets/owl-bg.webm'


const Home = (): React.ReactElement => {
	const { width, height } = useWindowSize()

	return (
		<>
			<Styles.VideoContainer height={height} width={width}>
				<video loop muted autoPlay playsInline id='video-background'>
					<source src={backgroundVideo} type='video/webm'/>
				</video>
			</Styles.VideoContainer>
			<Styles.HomeContainer height={height}>
				<Styles.Header>
					<h1>TUDev Projects</h1>
				</Styles.Header>
			</Styles.HomeContainer>
		</>
	)
}

export default Home
