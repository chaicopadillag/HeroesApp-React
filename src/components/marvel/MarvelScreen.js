import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {
	return (
		<div className="container mt-2">
			<h2 className="text-center">Marvel Comics</h2>
			<hr />
			<div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
				<HeroList publisher="Marvel Comics" />
			</div>
		</div>
	);
};

export default MarvelScreen;
