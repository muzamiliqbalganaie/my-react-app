import axios from "axios";

class ShoeModule{
    

getShoes = (callback) => {
        axios.get('./shoes.json')
        .then(response => {
            console.log(response.data);
            callback({status: 'success',data: [...response.data]});

        })
        .catch(()=>{
            console.log('error occured in getshoes function');
            callback({status:'error'});
        });
    };

    getShoesById = (id,callback) => {
        axios
        .get(`./shoes.json/${id}`)
        .then((response) =>  {
            console.log(response.data);
            callback({status: "success",data:response.data});
        })
        .catch((error) => {
            console.log(error);
            callback({status:"error"});
        });
    };
}

export default  new ShoeModule(); 