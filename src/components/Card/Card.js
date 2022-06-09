import React from 'react';
import '././Card.css';
import InfoCard from '../InfoCard/InfoCard';

const Card = () => {
	return (
		<div className="body">
			<div className="card">
				<div className="top-images">
					<img className="dancing-hero" src="/images/illustration-hero.svg"></img>
				</div>
				<InfoCard />
			</div>
		</div>
	);
};

export default Card;
