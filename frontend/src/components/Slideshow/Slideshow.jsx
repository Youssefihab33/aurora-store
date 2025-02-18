import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './slideshow.css';

export default function Slideshow() {
	const srcImages = [
		'/src/assets/pictures/ads/ad1.jpg',
		'/src/assets/pictures/ads/ad2.jpg',
		'/src/assets/pictures/ads/ad3.jpg',
		'/src/assets/pictures/ads/ad4.jpg',
	];
	const length = srcImages.length;
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => nextSlide(),
		onSwipedRight: () => prevSlide()
	  });

	if (!Array.isArray(srcImages) || srcImages.length <= 0) {
		return null;
	}

	useEffect(() => {
		//Implementing the setInterval method
		const interval = setInterval(() => {
			nextSlide();
		}, 7500);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [current]);

	return (
		<section {...swipeHandlers} className='slideshow'>
			<button
				className='left-arrow'
				onClick={prevSlide}
			>
				<i className='bi-chevron-compact-left'></i>
			</button>
			<button
				className='right-arrow'
				onClick={nextSlide}
			>
				<i className='bi-chevron-compact-right'></i>
			</button>
			<span className='slide-number'>
				{current + 1} of {length}
			</span>
			{srcImages.map((slide, index) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={index}
					>
						{index === current && (
							<img
								src={slide}
								alt={slide}
							/>
						)}
					</div>
				);
			})}
		</section>
	);
}
