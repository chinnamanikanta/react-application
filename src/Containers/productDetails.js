import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useSelector,useDispatch } from 'react-redux'
import { selectedProducts,removeSelectedProduct } from '../Redux/actions/ProductActions'

const ProductDetails = () => {
const {productId} = useParams()
  const dispatch = useDispatch()
    const product = useSelector((state) => state.product)
    
const {image,title,price,category,description} = product
  
const fetchSingleProduct = async() => {

        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log(err)
        })

        dispatch(selectedProducts(response.data))

    }  

    useEffect(() => {




        if(productId && productId !== '') fetchSingleProduct()

        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId]) // eslint-disable-line

    





      return (
         <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title}/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="$" className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
}

export default ProductDetails
