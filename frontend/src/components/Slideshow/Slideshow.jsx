import { ads } from '../../utils.js';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import './slideshow.css';

export default function Slideshow() {
	if (!Array.isArray(ads) || ads.length <= 0) {
		return null;
	}

	const properties = {
		prevArrow: (
			<button className='arrow arrow-left'>
				<i className='bi-chevron-compact-left'></i>
			</button>
		),
		nextArrow: (
			<button className='arrow arrow-right'>
				<i className='bi-chevron-compact-right'></i>
			</button>
		),
	};

	// const indicators = (index) => (<div className="indicator">{index + 1}</div>);

	return (
		<section className='slideshow'>
			<Slide {...properties}>
				{ads.map((ad, index) => (
					<div key={index} className='each-slide-effect'>
						<img src={`${import.meta.env.VITE_API_URL}${ad.image}`} alt={ad.name} />
					</div>
				))}
			</Slide>
		</section>
	);
}
