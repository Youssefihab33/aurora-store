import { useState, useEffect } from 'react';
import Card from './Card/Card';
import Slideshow from './Slideshow/Slideshow';
import { fetchData } from '../utils';
import { skinPhoto, hairPhoto, handmadePhoto } from '../assets/pictures/index';

export default function Content(){
	const [products, setProducts] = useState(null);

	useEffect(() => {
		async function getProducts() {
			const fetchedProducts = await fetchData(
				`http://127.0.0.1:8000/api/products/`
			);
			setProducts(fetchedProducts);
		}
		getProducts();
	}, []);
	console.log('Products:',products)
	if (!products) {
		return <div>Loading products...</div>;
	}

	return (<>
		<Slideshow />
		<main className='container'>
			<h1 className='fw-bold'>Aurora Originals</h1>
			<div className='d-flex flex overflow-x-scroll'>
				{products &&
					Array.isArray(products) &&
					products.map((product) => (
						<Card
							key={product.id}
							title={product.name}
							description={product.description}
							img={product.image}
						/>
					))}
			</div>
			<Card
				title='Skin Care Products'
				description=''
				img={skinPhoto}
			/>
			<Card
				title='Hair Care Products'
				description=''
				img={hairPhoto}
			/>
			<Card
				title='Handmade Products'
				description=''
				img={handmadePhoto}
			/>
			
		</main></>
	);
}
