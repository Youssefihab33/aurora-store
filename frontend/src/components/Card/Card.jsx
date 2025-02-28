import { Link } from 'wouter';
import './card.css';

export default function Card({ product }) {
	return (
		<div className='card h-100 shadow-sm'>
			<img src={import.meta.env.VITE_API_URL + product.image} className='card-img-top' alt={product.name} />
			<div className='label-top shadow-sm'>New</div>
			<div className='card-body'>
				<div className='clearfix mb-3'>
					<h5 className='card-title'>{product.name}</h5>
					<span className='float-start price-hp'>{product.price}EGP</span>
					<span className='float-end'>
						<span className='text-muted text-decoration-line-through small'>
							{product.old_price}EGP
						</span>
					</span>
				</div>

				<div className='text-center details-btn my-4'>
					<Link href={`detail/${product.id}`} className='btn btn-warning'>
						Details
					</Link>
				</div>
				<div className='clearfix mb-1'>
					<span className='float-start'>
						<i className='far fa-question-circle'></i>
					</span>
					<span className='float-end'>
						<i className='fas fa-plus'></i>
					</span>
				</div>
			</div>
		</div>
	);
}
