const { mount } = require('enzyme');
const { MemoryRouter } = require('react-router-dom');
const { AuthContext } = require('../../auth/AuthContext');
const { default: DashboardRouter } = require('../../routers/DashboardRouter');

describe('Pruebas en <DahsboardRouter/>', () => {
	const contextvalue = {
		dispatch: jest.fn(),
		session: {
			sesion: false,
		},
	};
	test('should ', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextvalue}>
				<MemoryRouter>
					<DashboardRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
