import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import './assets/bootstrap.5.3.3.min.js';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

createRoot(
	document.getElementById('root')
).render(
	<StrictMode>
		<Header />
		<Content />
		<Footer />
	</StrictMode>
);
