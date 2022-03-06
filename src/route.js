import { Link, Route, Switch } from 'react-router-dom';

//MUDANÇA DE PÁGINAS
import AllTrip from './pages/allTrip/allTrip';
import CreateNewTrip from './pages/createNewTrip/createNewTrip';
import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/homePage/home';
import Login from './pages/LoginPage/login';
import Subscribe from './pages/subscribeUser/subscrib';
import TripDetail from './pages/tripDetail/tripDetail';
import VerificaLogin from './pages/verificaLogin';

function Routes() {
	return (
		<div>
			<Link to="/" />
			<Link to="/dashboard" />
			<Link to="/detail-trip" />
			<Link to="/create-trip" />
			<Link to="/all-trip" />
			<Link to="/subscribe" />
			<Link to="/login" />
			<Switch>
				<Route exact path="/" component={Home} />

				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/area-admin" component={VerificaLogin} />
				<Route exact path="/login" component={Login} />
				
				<Route exact path="/create-trip" component={CreateNewTrip} />
				<Route exact path="/detail-trip" component={TripDetail} />

				<Route exact path="/all-trip" component={AllTrip} />
				<Route exact path="/subscribe" component={Subscribe} />
			</Switch>
		</div>
	);
}

export default Routes;
