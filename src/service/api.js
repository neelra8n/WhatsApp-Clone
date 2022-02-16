import axios from "axios";

// const URL = 'http://localhost:8000';

const URL = 'https://whatsapp-clone-neel.herokuapp.com';

export const addUser = async(data) => {
    try{
        return await axios.post(`${URL}/add`, data);
    }
    catch(e){
        console.log(`Error while calling add user ${e}`);
    }
}

export const getUsers = async(data) => {
    try{
        let response =  await axios.get(`${URL}/users`);
        // console.log(response.data);
        return response.data;
    }
    catch(e){
        console.log(`Error while calling get users api ${e}`);
    }
}

export const setConversation = async (data) => {
    try{
        await axios.post(`${URL}/conversation/add`, data)
    }
    catch (e){
        console.log('error while calling setConversation API', e );
    }
}

export const getConversation = async (data) =>{
    try{
        let response =  await axios.post(`${URL}/conversation/get`, data);
        return response.data;
    }
    catch(e){
        console.log('Error while calling getconversation', e);
    }
}


export const newMessage = async (data) =>{
    try{
        await axios.post(`${URL}/message/add`, data);
    }
    catch(e){
        console.log('Error while calling new message api', e);
    }
}

export const getMessage = async(id) => {
    try{
       return await axios.get(`${URL}/message/get/${id}`);
    }
    catch(e){
        console.log('Errot while calling getMessage api');
    }
}