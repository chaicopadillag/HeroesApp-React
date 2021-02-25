const { mount } = require('enzyme');
const { MemoryRouter, Route } = require('react-router-dom');
const { default: HeroScreen } = require('../../../components/heroes/HeroScreen');

describe('Pruebas de <HeroScreen/>', () => {
	const history = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
	};
	test('debe de mostrar el componente redirect si no hay argumentos en url', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero']}>
				<HeroScreen history={history} />
			</MemoryRouter>
		);
		expect(wrapper.find('Redirect').exists()).toBe(true);
	});
	test('debe de mostrar un Hero si el parametro existe y se encuenta', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:idHero" component={HeroScreen} />
			</MemoryRouter>
		);
		expect(wrapper.find('.row').exists()).toBe(true);
		expect(wrapper.find('.tex-center').text().trim()).toBe('Hero');
	});
	test('Debe de regregar a la pantalla anterior con push', () => {
		const history = {
			length: 2,
			push: jest.fn(),
			goBack: jest.fn(),
		};
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:idHero" component={() => <HeroScreen history={history} />} />
			</MemoryRouter>
		);
		wrapper.find('button').simulate('click');
		expect(history.push).toHaveBeenCalledWith('/');
		expect(history.goBack).not.toHaveBeenCalled();
	});

	test('debe de regregar a la pantalla anterior ', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:idHero" component={() => <HeroScreen history={history} />} />
			</MemoryRouter>
		);
		wrapper.find('button').simulate('click');
		expect(history.goBack).toHaveBeenCalled();
		expect(history.push).not.toHaveBeenCalledWith('/');
	});
});
