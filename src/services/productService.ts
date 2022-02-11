import axios from 'axios';


export class ProductService  {
    getProduct = async (jsonNumber: number) => {
        const response = await axios.get(`https://fir-hosting-app-clip.web.app/.well-known/api/${jsonNumber}.json`);
        return response;
    }
}


