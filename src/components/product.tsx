import {useEffect, useState} from "react";
import { ProductService } from '../services/productService';



const Product = () =>  {
        const [product, setProduct] =  useState<any>();
useEffect(() => {
    const productService = new ProductService();
    productService.getProduct(1).then((response: any) => {
    setProduct(response.data.tag.product);
     console.log(product, '=<<<<<<<<<<<<<<<');
    })
}, [product]);
return (
    <div className=""> 
        <h1>{product.name}</h1>
        <p>{product.variant}</p>
        <img src={product.image} alt=""/>
    </div>
)
}



export default Product;
