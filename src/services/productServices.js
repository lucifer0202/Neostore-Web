// import { Storage } from '../utils/Storage';
import axios from 'axios'

const fetchProduct = async (productInput) => {
    try {
        const resp = await axios.get('/api/product')       
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}


export const ProductService = {
    fetchProduct
}
