import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import HeroSearch from '../../components/search/HeroSearch';

describe('Prueba a component <SearchScreen/>', () => {
	test('debe mostrar los valores por defecto', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<Route path="/search" component={HeroSearch} />
			</MemoryRouter>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.alert-success').text().trim()).toBe('Search a Hero');
	});
	test('debe de mostrar un hero: Batman con el valor de queryString', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?keyword=Batman']}>
				<Route path="/search" component={HeroSearch} />
			</MemoryRouter>
		);
		expect(wrapper.find('input').prop('value')).toBe('Batman');
		expect(wrapper.find('HeroCard').exists()).toBe(true);
	});

	test('debe mostrar un error si no se encuentra hero', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?keyword=dfg45dgd5g45d5454545']}>
				<Route path="/search" component={HeroSearch} />
			</MemoryRouter>
		);
		expect(wrapper.find('.alert-danger').text().trim()).toBe('Keyword into not found in database');
		expect(wrapper.find('HeroCard').exists()).toBe(false);
	});

	test('Debe de enviar el Formulario', () => {
		const history = {
			push: jest.fn(),
		};
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?keyword=batman']}>
				<Route path="/search" component={() => <HeroSearch history={history} />} />
			</MemoryRouter>
		);
		wrapper.find('input').simulate('change', {
			target: { name: 'search', value: 'batman' },
		});
		wrapper.find('form').prop('onSubmit')({ preventDefault() {} });
		expect(history.push).toHaveBeenCalledWith('?keyword=batman');
	});
});
