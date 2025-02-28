import './detail.css';

export default function Detail({ product }) {
	return (
		<div id='detail' className='container-lg glassy p-5 m-5'>
			<div className='row'>
				<div className='col-lg-6'>
					<img className='preview-pic' src={import.meta.env.VITE_API_URL + product.image} />
					<ul className='preview-thumbnails'>
						<li>
							<img src={import.meta.env.VITE_API_URL + product.image} />
						</li>
						<li>
							<img src='https://i.ytimg.com/vi/7ftcfyfmvI4/maxresdefault.jpg' />
						</li>
						<li>
							<img src='https://m.media-amazon.com/images/I/51+iktNtcnL._AC_UF1000,1000_QL80_.jpg' />
						</li>
						<li>
							<img src='data:image/jpeg;base64,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' />
						</li>
						<li>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQia2YaB7ToFB2n6s-5u9OwO4slPhfRNczxoQ&s' />
						</li>
					</ul>					
				</div>

				<div className='col-lg-6'>
					<h3 className='product-title'>{product.name}</h3>
					<div className='rating'>
						
							<span className='bi-star-fill'></span>
							<span className='bi-star'></span>
							<span className='bi-star'></span>
							<span className='bi-star'></span>
							<span className='bi-star'></span>
						
						<span className='review-no'>&nbsp;(41 reviews)</span>
					</div>
					<p className='product-description'>{product.description}</p>
					<h4 className='price'>
						current price: <span>${product.price}</span>
					</h4>
					<p className='vote'>
						<strong>None</strong> of buyers enjoyed this product! <strong>(87 votes)</strong>
					</p>
					<h5 className='sizes'>
						sizes:
						<span className='size' data-toggle='tooltip' title='small'>
							s
						</span>
						<span className='size' data-toggle='tooltip' title='medium'>
							m
						</span>
						<span className='size' data-toggle='tooltip' title='large'>
							l
						</span>
						<span className='size' data-toggle='tooltip' title='xtra large'>
							xl
						</span>
					</h5>
					<h5 className='colors'>
						colors:
						<span className='color orange bi-x-lg'></span>
						<span className='color green'></span>
						<span className='color blue'></span>
					</h5>
					<div className='action'>
						<button className='add-to-cart btn btn-default bi-cart-plus' type='button'>
							&nbsp; 	add to cart
						</button>
						<button className='like btn btn-default' type='button'>
							<span className='bi-heart'></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
