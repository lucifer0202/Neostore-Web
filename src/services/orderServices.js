import axios from 'axios'
import { AuthService } from './authServices';

const addOrderApi = async (data) => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }
        }
        const resp = await axios.post(`api/order/place`, data,config)
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}

const getOrderApi = async () => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }
        }
        const resp = await axios.get(`api/order`,config)
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}


export const OrderServices = {
    addOrderApi,
    getOrderApi
}
