import axios from 'axios'
import { AuthService } from './authServices';

const addToCartApi = async (data) => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }
        }

        const resp = await axios.post(`/api/cart`, data, config)
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}


const getCartApi = async () => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }
        }

        const resp = await axios.get(`/api/cart`,config)
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}

export const CartServices = {
    addToCartApi,
    getCartApi
}
