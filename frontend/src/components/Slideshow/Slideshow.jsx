import { useState, useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import { fetchData } from '../../utils';
import 'react-slideshow-image/dist/styles.css';
import './slideshow.css';

export default function Slideshow() {
	const [ads, setAds] = useState(null);
	useEffect(() => {
		async function getAds() {
			const fetchedAds = await fetchData(`http://127.0.0.1:8000/api/ads/`);
			setAds(fetchedAds);
		}
		getAds();
	}, []);

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
						<img src={'http://127.0.0.1:8000' + ad.image} alt={ad.name} />
					</div>
				))}
			</Slide>
		</section>
	);
}
