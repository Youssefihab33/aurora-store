import Slideshow from './Slideshow/Slideshow';
import Card from './Card/Card';
import { products } from '../utils';

export default function Homepage() {
	return (
		<>
			<Slideshow />
			<main className='container'>
				<h1 className='fw-bold'>Aurora Originals</h1>
				<div className='d-flex flex justify-content-evenly mt-4 overflow-x-scroll'>
					{products && Array.isArray(products) && products.map((product) => <Card key={product.id} product={product} />)}
				</div>
			</main>
		</>
	);
}
