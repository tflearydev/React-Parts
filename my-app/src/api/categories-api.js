import apiConfig from '../config/api';


export const fetchCategories = async () =>{
    const response = await fetch(apiConfig.url+'categories');
    const json = await response.json();
    return json;

}


export const fetchManufacturersApi = async (categoryid) =>{
    const response = await fetch(apiConfig.url+'manufacturers' + '/' + categoryid);
    const json = await response.json();
    return json;

}


