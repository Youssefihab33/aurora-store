import { Route, Switch } from 'wouter';

import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

import About from './components/About';
import Detail from './components/Detail/Detail';

import { products } from './utils';
import './App.css';

export default function App() {
	return (
		<>
			<Header />

			<Switch>
				<Route path='/' component={Homepage} />

				<Route path='/about/' component={About} />

				<Route path='/detail/:id'>{(props) => <Detail product={products.find((product) => product.id == props.id)} />}</Route>

				<Route>404: No such page!</Route>
			</Switch>

			<Footer />
		</>
	);
}
