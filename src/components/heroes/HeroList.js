import React, { useMemo } from 'react';
import getHeroes from '../../selectors/getHeroes';
import HeroCard from './HeroCard';

const HeroList = ({ publisher = 'all' }) => {
	const heroes = useMemo(() => getHeroes(publisher), [publisher]);

	return heroes.map((hero) => <HeroCard key={hero.id} {...hero} />);
};

export default HeroList;
