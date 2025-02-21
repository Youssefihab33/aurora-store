import './card.css';

export default function Card({ title = 'Title', description = 'description', img, oldPrice = null, price, category }) {
	return (
		<>
			{/* <div className='card m-1'>
				<img src={img} className='card-img-top' alt={title} />
				<div className='card-bottom'>
					<h5>{title}</h5>
					<p>{description}</p>
					<p>${price}</p>
					<a href='#'>More...</a>
				</div>
			</div> */}

			<div className='card h-100 shadow-sm'>
				<img src={img} className='card-img-top' alt={title} />
				<div className='label-top shadow-sm'>New</div>
				<div className='card-body'>
					<div className='clearfix mb-3'>
						<h5 className='card-title'>{title}</h5>
						<span className='float-start price-hp'>{price}EGP</span>
						<span className='float-end'>
							<span className='text-muted small' href='#'>
								50 Available!
							</span>
						</span>
					</div>

					<div className='text-center details-btn my-4'>
						<a href='#' className='btn btn-warning'>
							Details
						</a>
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
		</>
	);
}
