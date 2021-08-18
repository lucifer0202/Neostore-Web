// import { Storage } from '../utils/Storage';
import axios from 'axios'

const AllProductApi = async (queryString = "") => {
    try {
        const resp = await axios.get(`/api/product?${queryString}`)       
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}



export const ProductService = {
    AllProductApi,
}
