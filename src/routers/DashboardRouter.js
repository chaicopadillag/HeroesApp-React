import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DcScreen from '../components/dc/DcScreen';
import Error404 from '../components/errors/Error404';
import HeroScreen from '../components/heroes/HeroScreen';
import Home from '../components/Home';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroSearch from '../components/search/HeroSearch';
import { Navbar } from '../components/UI/Navbar';

const DashboardRouter = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/marvel" component={MarvelScreen} />
				<Route exact path="/dc" component={DcScreen} />
				<Route exact path="/hero/:idHero" component={HeroScreen} />
				<Route exact path="/search" component={HeroSearch} />
				<Route exact path="/" component={Home} />
				<Route component={Error404} />
			</Switch>
		</>
	);
};

export default DashboardRouter;
