const { mount } = require('enzyme');
const { MemoryRouter, Router } = require('react-router-dom');
const { AuthContext } = require('../../../auth/AuthContext');
const { Navbar } = require('../../../components/UI/Navbar');
const { types } = require('../../../types/types');

describe('Prueba de componente <Navbar/>', () => {
	const historyMock = {
		push: jest.fn(),
		replace: jest.fn(),
		location: jest.fn(),
		listen: jest.fn(),
		createHref: jest.fn(),
	};
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
			<MemoryRouter>
				<Router history={historyMock}>
					<Navbar />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>
	);
	afterEach(() => {
		jest.clearAllMocks();
	});
	test('Debe mostrarse correctamente', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.text-warning').text().trim()).toBe('Code Codero');
	});
	test('Debe de llamar el logout y history', () => {
		wrapper.find('button').simulate('click');
		expect(contextvalue.dispatch).toHaveBeenCalledWith({ type: types.logout });
		expect(historyMock.replace).toHaveBeenCalledWith('/login');
	});
});
