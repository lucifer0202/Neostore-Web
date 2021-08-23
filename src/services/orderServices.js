import axios from 'axios'
import { AuthService } from './authServices';

const addOrderApi = async () => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }
        }
        const resp = await axios.post(`api/order/place`, config)
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}

const getNewAddressApi = async () => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }
        }

        const resp = await axios.get(`api/user/address`, config)
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}

export const OrderServices = {
    addOrderApi
}
