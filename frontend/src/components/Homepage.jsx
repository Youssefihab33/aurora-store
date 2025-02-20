import { useState, useEffect } from 'react';
import { fetchData } from '../utils';
import Slideshow from './Slideshow/Slideshow';
import Card from './Card/Card';

export default function Homepage() {
	const [products, setProducts] = useState(null);
	useEffect(() => {
		async function getProducts() {
			const fetchedProducts = await fetchData(`http://127.0.0.1:8000/api/products/`);
			setProducts(fetchedProducts);
		}
		getProducts();
	}, []);

	return (
		<>
			<Slideshow />
			<main className='container'>
				<h1 className='fw-bold'>Aurora Originals</h1>
				<div className='d-flex flex overflow-x-scroll'>
					{products && Array.isArray(products) && products.map((product) => <Card key={product.id} title={product.name} description={product.description} img={product.image} />)}
				</div>
			</main>
		</>
	);
}
