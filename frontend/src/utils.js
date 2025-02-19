export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not OK!');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export async function getProducts() {
    const fetchedProducts = await fetchData(
        `http://127.0.0.1:8000/api/products/`
    );
    return fetchedProducts
}