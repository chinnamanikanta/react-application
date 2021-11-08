import React,{ useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {setProducts} from '../Redux/actions/ProductActions'
import axios from 'axios';

 
import ProductComponent from './productComponent'
const ProductListing = () => {

    const dispatch = useDispatch()
  
     

      
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err)
        })
        dispatch(setProducts(response.data))
        
    }
    
    useEffect(() => {
         

        fetchProducts()


    },[])// eslint-disable-line
   

    return (
        <div className="ui grid container">
        
         
            
            <ProductComponent />
        </div>
    )
}

export default ProductListing
