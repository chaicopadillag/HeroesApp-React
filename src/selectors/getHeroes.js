import { heroes } from '../data/heroes';

const getHeroes = (publisher) => {
	const publisherValidate = ['DC Comics', 'Marvel Comics', 'all'];
	if (!publisherValidate.includes(publisher)) throw new Error(`El ${publisher} no es valido`);
	if (publisher !== 'all') {
		return heroes.filter((hero) => hero.publisher === publisher);
	} else {
		return heroes;
	}
};

export default getHeroes;
