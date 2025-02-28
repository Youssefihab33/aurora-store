// Fetching from the Backend
async function fetchData(whatToGet) {
	try {
		const response = await fetch(`${import.meta.env.VITE_API_URL}/api/${whatToGet}/`);
		if (!response.ok) {throw new Error('Network response was not ok');}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
		throw error;
	}
}
export const ads = await fetchData('ads');
export const products = await fetchData('products');
export const categories = await fetchData('categories');