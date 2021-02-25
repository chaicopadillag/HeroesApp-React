import React, { useContext } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
const AppRouter = () => {
	const { session } = useContext(AuthContext);
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={session.sesion} />
					<PrivateRoute path="/" component={DashboardRouter} isAuthenticated={session.sesion} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;
