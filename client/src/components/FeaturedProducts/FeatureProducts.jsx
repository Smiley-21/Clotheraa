import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";


const FeaturedProducts = ({ type }) => {

  // const data = [
  //   {
  //     id: 1,
  //     img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-womenswestern-Starting199.jpg",
  //     img2:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11118426/2020/1/23/a33992f6-f6b0-41b9-846e-437949b7910e1579776888386-Roadster-Women-Shorts-4481579776885784-1.jpg",
  //     title: "Women's Westernwear",
  //     oldPrice: 2400,
  //     price: 1800,
  //     isnew:true,
  //   },
  //   {
  //     id: 2,
  //     img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Bestsellers-Menswestern-Starting299.jpg",
  //     title: "Men's Westernwear",
  //     oldPrice: 1600,
  //     price: 1400,
  //   },
  //   {
  //     id: 3,
  //     img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-DNMX-Min60.jpg",
  //     title: "DNMX on Offer",
  //     oldPrice: 3000,
  //     price: 1600,
  //   },
  //   {
  //     id: 4,
  //     img: "https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Superdry-3050.jpg",
  //     img2:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8948337/2019/6/10/4c462ed5-e791-42d2-a75f-eca65aa5602d1560169019403-Superdry-Women-Black-Solid-Regular-Fit-Regular-Shorts-882156-1.jpg",
  //     title: "SUPERDRY on Biggest Sale",
  //     oldPrice: 2000,
  //     price: 2200,
  //     isnew:true,
  //   },
  // ];

  // const [products,setproducts]=useState([]);
  // useEffect ( ()=>{
    
  //   const fetchdata=async ()=>{
  //     try{
  //     const res=await axios.get(process.env.REACT_APP_API_URL+`/products?populate=*&[filters?[type][$eq]=${type}`,{
  //         headers:{
  //           Authorization:"Bearer "+process.env.REACT_APP_TOKEN,
            
  //         }
  //       })

  //       // console.log(res.data);
  //       setproducts(res.data.data);

  //     }catch(err)
  //     {
  //       console.log(err);
  //     }
  //   }

  //   fetchdata();
  // },[]);

  const{data,loading,error}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

console.log(type)

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        {`${type}==="featured"`?(
          <p>Discover the epitome of style and sophistication with our exclusive  Clothera . This exquisite piece of clothing is designed to elevate your wardrobe and make a lasting impression wherever you go. Crafted with meticulous attention to detail and using the finest materials, it offers the perfect blend of comfort, quality, and fashion-forward aesthetics</p>
        ):
        (
        <p> There is a growing demand for eco-friendly clothing. Look for products made from sustainable materials, such as organic cotton or recycled polyester. Oversized clothing is a major trend right now. This type of clothing is loose-fitting and comfortable, making it perfect for lounging or running errands</p>
        )}
      </div>
      <div className="bottom">
        {error?"Something went Wrong":
          loading?"loading":
          data?.map((item) => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
