import React from 'react';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      	<Router>
			<div className='App'>
				<Link to={'/home'}>Home</Link>
				<Link to={'/events'}>Events</Link>
				<div className='content'>
					{/* Define routes within the website */}
					<Routes>
						<Route path='/' element={<p>Home</p>}/>
						<Route path={'/home'} element={<p>Home2</p>}/>
						<Route path={'/events'} element={<p>Events2</p>}/>
					</Routes>
				</div>
			</div>
		</Router>
    </div>
  );
}

export default App;
