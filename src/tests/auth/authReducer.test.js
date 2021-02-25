import { shallow } from 'enzyme';
import authReducer from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas de authReducer', () => {
	const sesion = { sesion: false };
	test('Debe de Retornar el estado por defecto', () => {
		const state = authReducer(sesion, {});
		expect(state).toEqual(sesion);
	});
	test('debe de autenticar y colocar el nombre del usuario y correo', () => {
		const action = {
			type: types.login,
			payload: {
				nombre: 'Code Codero',
				correo: 'codecodero@gmail.com',
			},
		};
		const state = authReducer(sesion, action);
		expect(state).toEqual({ ...action.payload, sesion: true });
	});

	test('debe de borrar el nombre se usuario y sesion en false', () => {
		let action = {
			type: types.login,
			payload: {
				nombre: 'Code Codero',
				correo: 'codecodero@gmail.com',
			},
		};
		let state = authReducer(sesion, action);
		expect(state).toEqual({ ...action.payload, sesion: true });
		action = {
			type: types.logout,
		};
		state = authReducer(sesion, action);
		expect(state).toEqual({ sesion: false });
	});
});
