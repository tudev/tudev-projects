// 3rd party imports
import React from 'react';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';

// Custom imports
import RyanHodge from './projects/RyanHodge/RyanHodge';
import { PATHS } from './tools/Constants';

function App() {
  return (
    <div className="App">
      	<Router>
			<div className='App'>
				<Link to={'/home'}>Home</Link>
				<Link to={PATHS.RYAN_HODGE}>Ryan Hodge</Link>
				<div className='content'>
					{/* Define routes within the website */}
					<Routes>
						<Route path={PATHS.HOME} element={<p>Home</p>}/>
						<Route path={PATHS.RYAN_HODGE} element={<RyanHodge/>}/>
						<Route path={PATHS.HOME} element={<p>Events2</p>}/>
					</Routes>
				</div>
			</div>
		</Router>
    </div>
  );
}

export default App;
