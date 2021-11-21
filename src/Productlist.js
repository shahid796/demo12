import React, { useState } from 'react'


export const Productlist = ({product,onnadd}) => {
   
    return (
        <div>

            <h3>{product.name}</h3>
            <img src={require('./image/images.jpg').default} height="150px" width="150px"></img>
            <h6>
                {product.price} Rs
            </h6>
            <h6>
                description:{product.description}
            </h6>
            <button className="btn btn-success" onClick={()=>onnadd(product)}>ADD TO CART</button>

        </div>
    )
}
