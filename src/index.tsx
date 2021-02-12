import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Pages
import Home from './Pages/Home'
import SigneIn from './Pages/SigneIn'
import SigneUp from './Pages/SigneUp'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/signein" component={SigneIn}></Route>
					<Route path="/signeup" component={SigneUp}></Route>
				</Switch>
			</App>
		</BrowserRouter>
	</React.StrictMode>,
document.getElementById('root')
);

reportWebVitals();
