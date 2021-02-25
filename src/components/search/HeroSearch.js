import React, { useMemo } from 'react';
import queryString from 'query-string';
import useForm from '../../hooks/useform';
import HeroCard from '../heroes/HeroCard';
import { useLocation } from 'react-router-dom';
import getHeroesByName from '../../selectors/getHeroesByName';

const HeroSearch = ({ history }) => {
	const location = useLocation(),
		{ keyword = '' } = queryString.parse(location.search),
		[formValues, handleChange] = useForm({ search: keyword }),
		{ search } = formValues;
	const heroesResult = useMemo(() => getHeroesByName(keyword), [keyword]);
	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?keyword=${search}`);
	};
	return (
		<div className="container mt-2">
			<h2 className="text-center">Search Heroes</h2>
			<hr />
			<div className="row">
				<div className="col-6 offset-3">
					<form method="POST" onSubmit={handleSearch} className="row d-flex justify-content-between">
						<div className="col-8">
							<input type="text" className="form-control" placeholder="Keywork" name="search" value={search} onChange={handleChange} autoComplete="off" />
						</div>
						<div className="col-4">
							<button className="btn btn-outline-primary">Search</button>
						</div>
					</form>
				</div>
				<div className="col-12">
					<h2>Resul search</h2>
					<div className="row">
						{keyword === '' && <div className="alert alert-success">Search a Hero</div>}
						{keyword !== '' && heroesResult.length <= 0 && <div className="alert alert-danger">Keyword into not found in database</div>}
						{heroesResult.map((hero) => (
							<HeroCard key={hero.id} {...hero} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSearch;
