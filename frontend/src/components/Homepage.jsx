import { useState, useEffect } from 'react';
import { fetchData } from '../utils';
import Slideshow from './Slideshow/Slideshow';
import Card from './Card/Card';

export default function Homepage() {
	const [products, setProducts] = useState(null);
	useEffect(() => {
		async function getProducts() {
			const fetchedProducts = await fetchData(`${import.meta.env.VITE_API_URL}/api/products/`);
			setProducts(fetchedProducts);
		}
		getProducts();
	}, []);

	return (
		<>
			<Slideshow />
			<main className='container'>
				<h1 className='fw-bold'>Aurora Originals</h1>
				<div className='d-flex flex justify-content-evenly mt-4 overflow-x-scroll'>
					{products && Array.isArray(products) && products.map((product) => <Card key={product.id} title={product.name} description={product.description} img={import.meta.env.VITE_API_URL + product.image} oldPrice={product.old_price} price={product.price} category={product.category}/>)}
				</div>
			</main>
		</>
	);
}
