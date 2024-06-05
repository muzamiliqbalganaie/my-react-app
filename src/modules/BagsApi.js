import axios from "axios";
 
class BagsModule{
 

getBags =(callback )=> {
     axios
    .get('./bags.json')
    .then(response => {
        callback({status: 'success',data: [...response.data] });
    })
    .catch(err =>{
        console.log('error occured in get clothes');
        callback({ status: 'error'});
    });
};

getBagsById = (id,callback ) => {
    axios
    .get(`./bags.json/${id}`)
    .then((response) => {
        console.log(response.data);
        callback({status: "success",data: response.data});
    })
    .catch((error) => {
        console.log(error);
        callback({ status: "error" });
    });
};

updateBagsById = () => {};

deleteBagsById= () => {};

}

export default new BagsModule();