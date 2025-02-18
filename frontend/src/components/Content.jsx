import { useState, useEffect } from 'react';
import Card from './Card/Card';
import Slideshow from './Slideshow/Slideshow';
import { skinPhoto, hairPhoto, handmadePhoto } from '../assets/pictures/index';

export default function Content() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		async function fetchData(url) {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error('Network response was not OK!');
				}
				const result = await response.json();
				console.info(result)
				return result;
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}

		async function getProducts() {
			const fetchedProducts = await fetchData(
				`http://127.0.0.1:8000/api/products/`
			);
			setProducts(fetchedProducts);
		}
		getProducts();
	}, []);

	if (!products) {
		return <div>Loading products...</div>;
	}

	return (
		<main className='container'>
			<h1 className='fw-bold'>
				{products &&
					Array.isArray(products) &&
					products.map(
						(
							product // Check if products is valid before mapping
						) => (
							<Card key={product.id} title={product.name} description={product.description} img={product.image} />
						)
					)}
			</h1>
			<Slideshow />
			<h1 className='fw-bold'>Aurora Originals</h1>
			<div className='d-flex flex overflow-x-scroll'>
				<Card title='Product 1' />
				<Card title='Product 2' />
				<Card title='Product 3' />
				<Card title='Product 4' />
				<Card title='Product 5' />
			</div>

			<div className='container'>
				
				<Card />
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
		</main>
	);
}
