import react, { useState, useEffect } from "react";
import axios from "axios";
import { Productlist } from "./Productlist";
import './Product.css'


export default function PrintProduct({onadd}) {
  const  [products, setProducts] = useState();

  async function fetchProducts() {
    const response = await axios.post(
      "http://fda.intertoons.com/api/V1/products",
      {},
      {
        headers: {
          Authorization: "Bearer akhil@intertoons.com",
          //it can be iPhone or your any other attribute
          "Content-Type": "application/json",
        },
      }
    );
    if (response?.data) {
      console.log(response);
      setProducts(response.data?.data?.products);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products) {
    console.log(products);
    return (
        <div>
            <h1 className="h1">products</h1>
        <div className="row">
          {
              products.map((product)=>{
                  return (
                      <div className="col-sm-4">
                         <Productlist key={product.id} product={product} onnadd={onadd}/>
                      </div>
                  )
              })
          }
        </div>
        </div>
    //   <ul>
    //     {products.map((product) => {
    //       return <li>{product.name}</li>;
    //     })}
    //   </ul>
    );
  }
  return <></>;
}
