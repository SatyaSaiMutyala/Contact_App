import axios from "axios"
import { BASE_URL } from "./CommonApi"

const endPoint = 'contactData'

export const LoadContactApi = async() => {
    try{

        const response  = await axios.get(`${BASE_URL}/${endPoint}.json`)
        const jsonData = response.data;
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));

        }

    }catch(error){
        console.log('error Occured ---->', error)
    }


}

export const CreateContactApi = async(values) => {
    try{
        const response  = await axios.post(`${BASE_URL}/${endPoint}.json`, values)
        const jsonData = response.data;
        if(jsonData === null) {
            return []
        }
        else{
            return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));

        }

    }catch(error){
        console.log('error Occured ---->', error)
    }
}

export const UpdateContactApi = async (id, updatedData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${endPoint}/${id}.json`, updatedData);
        return response.data; 
    } catch (error) {
        console.log('Error occurred during update ---->', error);
        throw error;
    }
};

export const DeleteContactApi = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${endPoint}/${id}.json`);
        return response.data; 
    } catch (error) {
        console.log('Error occurred during delete ---->', error);
        throw error; 
    }
};