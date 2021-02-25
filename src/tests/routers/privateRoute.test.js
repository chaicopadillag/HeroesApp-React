const { mount } = require('enzyme');
const { MemoryRouter } = require('react-router-dom');
const { default: PrivateRoute } = require('../../routers/PrivateRoute');

describe('Prueba de Private Route', () => {
	const props = {
		location: {
			pathname: '/marvel',
		},
	};
	Storage.prototype.setItem = jest.fn();
	test('debe de mostrar el componente si esta autenticado y guardar en localStorage', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute isAuthenticated={true} component={() => <span>Listo!!!</span>} {...props} />
			</MemoryRouter>
		);
		expect(wrapper.find('span').exists()).toBe(true);
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
	});

	test('debe de bloquear el componente si no esta autenticado', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute isAuthenticated={false} component={() => <span>Listo!!!</span>} {...props} />
			</MemoryRouter>
		);
		expect(wrapper.html()).toBe('');
		expect(wrapper.find('span').exists()).toBe(false);
	});
});
