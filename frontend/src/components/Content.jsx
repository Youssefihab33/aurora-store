import Card from './Card/Card';
import Slideshow from './Slideshow/Slideshow';
import {skinPhoto, hairPhoto, handmadePhoto} from '../assets/pictures/index'

export default function Content() {
	return (
		<main className='container'>

			<Slideshow />
			<h1 className='fw-bold'>Aurora Originals</h1>
			<div className='d-flex flex overflow-x-scroll'>
				<Card title="Product 1" img="	" />
				<Card title="Product 2" />
				<Card title="Product 3" />
				<Card title="Product 4" />
				<Card title="Product 5" />
			</div>

			<div className="container">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>

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
				{/* <Card
					title='Resin Products'
					description=''
					img={resinPhoto} 
				/>*/}
				<Card
					title='Handmade Products'
					description=''
					img={handmadePhoto}
				/>
				{/* <Card
					title='Accessories'
					description=''
					img={accessoriesPhoto}
				/> */}
					</main>
	);
}
