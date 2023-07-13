import "./Cart.scss";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useDispatch, useSelector} from 'react-redux';
import { removeToCart ,resetCart} from "../../redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from "../../makeRequest";

const Cart = () => {

  const products=useSelector((state)=>state.cart.products);
  const baseURL=process.env.REACT_APP_UPLOAD_URL;
  const dispatch=useDispatch();

  const totalPrice=()=>{
    let total=0
    products.map( (item)=>total+=item.quantity*item.price);
    return total.toFixed(2);
  }
  

  const stripePromise = loadStripe('pk_test_51MqJwTSCQKJFvadA9PC65mwAMm5Ssk5tADwY4I6YdykNaccwJF2WyOOjrMwNHp1ySDoRh8V24wH3EdZrQQXPSVxe00lMrry3qd');
  const handlePayment=async()=>{
    try{
      const stripe=await stripePromise;

      const res=await makeRequest.post("/orders",{products});            // making post request to payment
                                                                    // sending products to backend

      console.log(res.data);
      await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      })

    }catch(err)
    {
      console.log(err);
    }
  }

  

  // const data = [
  //   {
  //     id: 1,
  //     img: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/11/3ddaa435-7653-4790-bbc0-11304bacb4ea1591857354567-Roadster-Women-Shorts-6171591857352088-1.jpg",
  //     img2: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11489552/2020/6/11/95fd2ae5-3d16-4f99-9755-65adbdee0c441591857354510-Roadster-Women-Shorts-6171591857352088-2.jpg",
  //     title: "Women's Westernwear",
  //     desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, magni",
  //     oldPrice: 2400,
  //     price: 1800,
  //     isnew: true,
  //   },
  //   {
  //     id: 2,
  //     img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-Menswestern-Starting299.jpg",
  //     title: "Men's Westernwear",
  //     oldPrice: 1600,
  //     desc:" Soluta voluptatem laborum fugit repudiandae inventore enim quae ratione porro doloremque voluptas",
  //     price: 1400,
  //   },
  // ];
  return (
    <div className="cart">
      <h1>Products in the Cart</h1>
      {products?.map((p) => (
        <div className="item" key={p.id}>
          <img src={baseURL+p.img} alt="" />
          <div className="detail">
            <h1>{p.title}</h1>
            <p>{p.desc?.substring(0, 40)}</p>
            <div className="price">{p.quantity} x ${p.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" onClick={()=>dispatch(removeToCart(p.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <button className="checkout" onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset the Cart</span>
    

      
    </div>
  );
};

export default Cart;
