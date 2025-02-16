import ad1 from '../../assets/pictures/ads/ad1.jpg';
import ad2 from '../../assets/pictures/ads/ad2.jpg';
import ad3 from '../../assets/pictures/ads/ad3.jpg';
import ad4 from '../../assets/pictures/ads/ad4.jpg';

import './slideshow.css';

export default function Slideshow() {
	return (
		<div
			id='ads'
			className='mx-auto'
		>
			<div id='slideshow'>
				<div className='slide-wrapper'>
					<div className='slide'>
						<img
							className='slide-content'
							src={ad1}
						/>
					</div>
					<div className='slide'>
						<img
							className='slide-content'
							src={ad2}
						/>
					</div>
					<div className='slide'>
						<img
							className='slide-content'
							src={ad3}
						/>
					</div>
					<div className='slide'>
						<img
							className='slide-content'
							src={ad4}
						/>
					</div>
					{/* <div className="slide">
                        <h1 className="slide-content">5</h1>
                    </div> */}
				</div>
			</div>
		</div>
	);
}
