import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
	const contextvalue = {
		dispatch: jest.fn(),
		session: {
			sesion: false,
		},
	};
	test('Debe mostrar login si no esta autenticado', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextvalue}>
				<AppRouter />
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test('debe mostrar el home si esta autenticado', () => {
		const contextvalue = {
			dispatch: jest.fn(),
			session: {
				nombre: 'Code Codero',
				correo: 'codecodero@gmail.com',
				sesion: true,
			},
		};
		const wrapper = mount(
			<AuthContext.Provider value={contextvalue}>
				<AppRouter />
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.navbar').exists()).toBe(true);
	});
});
