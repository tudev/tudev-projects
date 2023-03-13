// 3rd party imports
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom imports
import Styles from './AppStyles';
import RyanHodge from './components/projects/RyanHodge/RyanHodge';
import Navigation from './Navigation';
import { PATHS } from './tools/Constants';
import Home from './components/Home';
import useWindowDimensions from './tools/HelpfulFunctions';

function App() {
	const {height} = useWindowDimensions()

	return (
		<Styles.OverallStyles>
			<Router>
				<Styles.AppContainer height={height}>
					<Navigation/>
					<div className='content'>
						{/* Define routes within the website */}
						<Routes>
							<Route path={'/'} element={<Home/>}/>
							<Route path={PATHS.HOME} element={<Home/>}/>
							<Route path={PATHS.RYAN_HODGE} element={<RyanHodge/>}/>
							<Route path={PATHS.HOME} element={<p>Events2</p>}/>
						</Routes>
					</div>
				</Styles.AppContainer>
			</Router>
		</Styles.OverallStyles>
	);
}

export default App