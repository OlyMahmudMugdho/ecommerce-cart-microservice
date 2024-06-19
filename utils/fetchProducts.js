
const fetchAllProducts = async () => {
    const response = await fetch(`http://localhost:8080/api/v1/products`);
    const products = await response.json();
    return products;
}

export default fetchAllProducts;