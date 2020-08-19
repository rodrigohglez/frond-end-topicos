import axios from "axios";

export class ProductService {

    // baseUrl = "http://localhost:8080/api/Products/";
    baseUrl = "https://back-end-topicos.herokuapp.com/api/productos/";

    create(Product){
        return axios.post(this.baseUrl+"producto/", Product).then(res => res.data);
    }

    readAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(Product){
        return axios.put(this.baseUrl+"producto/"+Product._id, Product).then(res => res.data);
    }
}