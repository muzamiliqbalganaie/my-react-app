import axios from "axios";
 
class ClothesModule{


getClothes =(callback) => {
     axios
    .get('./clothes.json')
    .then(response => {
        callback({status: 'success',data: [...response.data] });
    })
    .catch(error =>{
        console.log('error occured in getCothes');
        callback({ error });
    });
};

getClothesById = ({id,callback} ) => {
    axios
    .get(`./clothes.json/${id}`)
    .then((response) => {
        console.log(response.data);
        callback({status: "success",data: response.data});
    })
    .catch((error) => {
        console.log('error occured in get clothesById module');
        callback({error});
    });
};

updateClothesById = () => {};

deleteClothesById= () => {};

}

export default  new ClothesModule();