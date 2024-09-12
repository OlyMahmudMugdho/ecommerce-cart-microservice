export const fetchProduct = async (id) => {
    const url = `http://ims-app:8081/api/v1/products/${id}`;
    const response = await fetch(url);
    const product = await response.json();
    return product;
}