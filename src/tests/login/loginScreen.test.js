import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import LoginScreen from '../../components/login/LoginScreen';

describe('Prueba en  <LoginScreen/>', () => {
	const history = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
		replace: jest.fn(),
	};
	const contextvalue = {
		dispatch: jest.fn(),
		session: {
			sesion: false,
		},
	};
	const wrapper = mount(
		<AuthContext.Provider value={contextvalue}>
			<LoginScreen history={history} />
		</AuthContext.Provider>
	);

	test('debe de mostrar correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de realizar el disptach y la navegacion', () => {
		wrapper.find('button').simulate('click');
		expect(contextvalue.dispatch).toHaveBeenCalledTimes(1);
		expect(history.replace).toHaveBeenCalledWith('/');
	});
});
