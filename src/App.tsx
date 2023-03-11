// 3rd party imports
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Custom imports
import Styles from './AppStyles';
import RyanHodge from './components/projects/RyanHodge/RyanHodge';
import Navigation from './Navigation';
import { PATHS } from './tools/Constants';

function App() {
	return (
		<Styles.AppContainer>
			<Router>
				<Styles.NavContainer>
					<Navigation/>
				</Styles.NavContainer>
				
				<div className='content'>
					{/* Define routes within the website */}
					<Routes>
						<Route path={PATHS.HOME} element={<p>Home</p>}/>
						<Route path={PATHS.RYAN_HODGE} element={<RyanHodge/>}/>
						<Route path={PATHS.HOME} element={<p>Events2</p>}/>
					</Routes>
				</div>
			</Router>
		</Styles.AppContainer>
	);
}

export default App;
