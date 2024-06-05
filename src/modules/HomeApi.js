import axios from "axios";
 
class HomeModule{
    

getHomes = (callback )=> {
     axios
    .get('./home.json')
    .then(response => {
        console.log(response.data);
        callback({status: 'success',data: [...response.data] });
    })
    .catch(() =>{
        console.log('error occured in get home');
        callback({ status: 'error'});
    });
};

getHomesById = (id, callback) => {
    axios
    .get(`./home.json/${id}`)
    .then((response) => {
        console.log(response.data);
        callback({status: "success", data: response.data });
    })
    .catch((error) =>  {
        console.log(error);
        callback({ status: "error"});
    });
};

updateHomesById = () => {};

deleteHomesById = () => {};

}

export default  new HomeModule();