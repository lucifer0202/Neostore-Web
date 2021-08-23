import axios from 'axios'
import { AuthService } from './authServices';

const addNewAddressApi = async (data) => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }
        }
        const resp = await axios.post(`api/user/address`, data, config)
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
const UpdateAddressApi = async (addressId) => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }

        }
        const resp = await axios.put(`api/user/address` + addressId, config)
        return resp.data
    }
    catch (error) {
        console.error(error);
    }
}
const deleteAddressApi = async (_id) => {
    try {
        let config = {
            headers: {
                Authorization: AuthService.getAccessToken(),
            }

        }
        const resp = await axios.delete(`api/user/address/`+_id, config)
    }
    catch (error) {
        console.error(error);
    }
}
export const AddressServices = {
    addNewAddressApi,
    getNewAddressApi,
    UpdateAddressApi,
    deleteAddressApi
}
