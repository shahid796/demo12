import logo from './logo.svg';
import './App.css';
import PrintProduct from './Product';
import { Cart } from './Cart';
import { useState } from 'react';
import { Head } from './Head';






function App() {
  const [cartitem,setcartitem] = useState([])
  const no_of_items_cart=cartitem.length
  const additem=(product)=>{
    
   let exit=cartitem.find((item)=>item.id==product.id)
   if(exit){
    let updatecart = cartitem.map((x)=>{
       return x.id==product.id?{...exit,qty:exit.qty+1}:{...x}
     });
     setcartitem(updatecart)
   }
   else{
     setcartitem([...cartitem,{...product,qty:1}])
   }
  }
  const onnremove=(product)=>{
    console.log("cart ",product);
    if(product.qty==1){
      let new_cartitem = cartitem.filter((item)=>{
        if(product.qty == 1){
          return item.id != product.id;
        }
      })
      setcartitem(new_cartitem)
    }else{
     const lesscart = cartitem.map((item)=>{
        return item.id == product.id?{...product,qty:product.qty-1}:{...item}
      })
    setcartitem(lesscart)
    }
   }

  return (
    <div>
      <Head/>
    <div className="row">
     <div className="col-sm-8 backp">
      <PrintProduct onadd={additem}/>
      </div>
      <div className="col-sm-4 backc">
        <Cart cartitem={cartitem} onnadd={additem} onnremove={onnremove} />
      </div>
    </div>
    </div>
  );
}

export default App;
