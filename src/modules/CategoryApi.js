import axios from "axios";

class Category{
    


    getCategory = (callback) => {
        axios
          .get('./categories.json')
          .then(response => {
            callback({status: 'success',data: [...response.data]});
          })
          .catch(err => {
            console.log('Error occured in get category');
            callback({ status: err})
          });
    };


    getCategoryById = ({id,callback}) => {
      axios
        .get(`./categories.json/${id}`)
        .then(response => {
          console.log(response.data);
          callback({status: 'success',data: response.data});
        })
        .catch(err => {
          console.log('Error occured in getcategorybyId');
          callback({ status: err})
        });
  };
}

export default  new Category();