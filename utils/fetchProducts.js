
const fetchAllProducts = async () => {
    const response = await fetch(`http://ims-app:8081/api/v1/products`);
    const products = await response.json();
    return products;
}

export default fetchAllProducts;