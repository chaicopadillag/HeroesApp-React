import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		// history.push('/')
		const lastPath = localStorage.getItem('lastPath') || '/';
		dispatch({
			type: types.login,
			payload: {
				nombre: 'Code Codero',
				correo: 'code@gmail.com',
			},
		});
		history.replace(lastPath);
	};
	return (
		<div className="container mt-2">
			<h2>Login</h2>
			<hr />
			<button className="btn btn-primary" onClick={handleLogin}>
				Login in App Heroes
			</button>
		</div>
	);
};

export default LoginScreen;
