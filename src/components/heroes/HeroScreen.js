import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import getHeroesById from '../../selectors/getHeroById';

const HeroScreen = ({ history }) => {
	const { idHero } = useParams();
	const hero = useMemo(() => getHeroesById(idHero), [idHero]);
	if (!hero) return <Redirect to="/" />;
	const { superhero, publisher, alter_ego, first_appearance, characters } = hero;
	const handleBack = () => {
		if (history.length <= 2) {
			history.push('/');
		} else {
			history.goBack();
		}
	};
	return (
		<div className="container">
			<h2 className="tex-container">Hero</h2>
			<hr />
			<div className="row animate__animated animate__fadeIn">
				<div className="col-12 col-md-4 animate__animated animate__fadeInLeft">
					<figure className="figure animate__animated animate__fadeInLeft">
						<img src={`../assets/heroes/${idHero}.jpg`} className="figure-img img-fluid rounded" alt={superhero} />
					</figure>
				</div>
				<div className="col-12 col-md-8 animate__animated animate__fadeInRight">
					<h2>{superhero}</h2>
					<ul className="list-group mb-2">
						<li className="list-group-item">
							<b>Alter ego: </b>
							{alter_ego}
						</li>
						<li className="list-group-item">
							<b>Publisher: </b>
							<span className={publisher === 'Marvel Comics' ? 'badge bg-danger' : 'badge bg-dark'}>{publisher}</span>
						</li>
						<li className="list-group-item">
							<b>Fisrt appearence: </b>
							{first_appearance}
						</li>
						<li className="list-group-item">
							<b>Characters: </b>
							{characters}
						</li>
					</ul>
					<button className="btn btn-outline-primary" onClick={handleBack}>
						Regresar
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroScreen;
