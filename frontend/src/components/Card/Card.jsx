import './card.css';

export default function Card({ title = 'Title', description = 'description', img }) {
	return (
		<div className='card m-1'>
			<img src={img} className='card-img-top' alt={title} />
			<div className='card-bottom'>
				<h5>{title}</h5>
				<p>{description}</p>
				{/* <a href='#'>More...</a> */}
			</div>
		</div>
	);
}
