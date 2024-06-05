import axios from "axios";
 
class ProductsModule{
 

getProducts = (callback) => {
     axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        callback({status: 'success',data: [...response.data] });
    })
    .catch((error)=>{
        console.log(error);
        callback({ status: 'error'});
    });
};

getProductsById = (id, callback) => {
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => {
        console.log(response.data);
        callback({status: "success", data: response.data });
    })
    .catch((error) => {
        console.log(error);
        callback({ status: "error"});
    });
};

updateProductById = () => {};

deleteUserById = () => {};

}

export default  new ProductsModule();