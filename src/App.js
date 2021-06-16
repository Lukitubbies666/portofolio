import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Exp1 from './pages/CSPM';
import LandingPage from './pages/Landing';
import Exp2 from './pages/Bekraf';
import Exp3 from './pages/BXT';
import Exp4 from './pages/Others';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={LandingPage}/>
				<Route path='/exp1' exact component={Exp1}/>
				<Route path='/exp2' exact component={Exp2}/>
				<Route path='/exp3' exact component={Exp3}/>
				<Route path='/exp4' exact component={Exp4}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;