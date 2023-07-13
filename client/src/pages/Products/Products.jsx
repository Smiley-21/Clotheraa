import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Products = () => {

  // const param =useParams();
  // console.log(param)

  const CatId=parseInt(useParams().id);
  const [maxPrice,setmaxPrice]=useState(3000);
  const [sort,setSort]=useState('asc');
  const[selectedSubCat,setSelectedSubCat]=useState([]);

  const{data,loading,error}=useFetch(`/sub-categories?filters[categories][id][$eq]=${CatId}`)
  // console.log(data[0].id);
  

  const handleChange=(e)=>{
    const value=e.target.value;
    const isChecked=e.target.checked;
    setSelectedSubCat(isChecked? [...selectedSubCat,value]:selectedSubCat.filter(item=>item!==value));
  };
  // console.log(selectedSubCat);
  
  return (
    <div className="products">
      {/* left */}
      <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>
          {/* <div className="inputItem">
            <input type="checkbox" name="" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="2" value={1} />
            <label htmlFor="2">Shirt</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" name="" id="3" value={1} />
            <label htmlFor="3">T-Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="4" value={1} />
            <label htmlFor="4">Coats</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" name="" id="5" value={1} />
            <label htmlFor="5">Jeans</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" name="" id="6" value={1} />
            <label htmlFor="6">Tops </label>
          </div> */}
          {
            data?.map((item)=>(
              <div className="inputItem" key={item.id}>
                <input type="checkbox"  id={item.id} value={item.id} onChange={handleChange}/>
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))
          }
        </div>
        <div className="filerItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" name="" id="" min={0} max={10000} onChange={(e)=>setmaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by price</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" onChange={(e)=>{setSort("asc")}} />
            <label htmlFor="asc" >Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc"  onChange={(e)=>{setSort("desc")}}/>
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="right">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         alt="" 
         className="catImg" />
         <List catId={CatId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCat}/>
      </div>
    </div>
  );
};

export default Products;
