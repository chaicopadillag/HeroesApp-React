import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import authReducer from './auth/authReducer';
import AppRouter from './routers/AppRouter';
const init = () => {
	return JSON.parse(localStorage.getItem('session')) || { sesion: false };
};
const HeroesApp = () => {
	const [session, dispatch] = useReducer(authReducer, {}, init);

	useEffect(() => {
		localStorage.setItem('session', JSON.stringify(session));
	}, [session]);

	return (
		<AuthContext.Provider value={{ session, dispatch }}>
			<AppRouter />
		</AuthContext.Provider>
	);
};

export default HeroesApp;
