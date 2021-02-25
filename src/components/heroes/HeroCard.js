import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
	return (
		<div className="col animate__animated animate__fadeIn">
			<div className="card">
				<img src={`./assets/heroes/${id}.jpg`} className="card-img-top" alt={superhero} />
				<div className="card-body">
					<h5 className="card-title">{superhero}</h5>
					<p className="card-text">{alter_ego}</p>
					{alter_ego !== characters && <p className="card-text">{characters}</p>}
					<p className="card-text">
						<small className="text-muted">{first_appearance}</small>
					</p>
					<p className="card-text">
						<span className={publisher === 'Marvel Comics' ? 'badge bg-danger' : 'badge bg-dark'}>{publisher}</span>
					</p>
					<Link to={`/hero/${id}`} className="btn btn-outline-primary">
						Ver más
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroCard;
