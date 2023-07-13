import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const data=useSelector((state)=>state.cart.products)



  return (
    <div className="navbar">
      <div className="wrapper">
        {/* Left */}
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardDoubleArrowDownIcon />
          </div>

          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="women">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="center">
          <Link className="link" to="/">
          <div className="item"  >CLOTHERA</div>
          </Link>
        </div>
        {/* Right */}

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="">
              About
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="">
              Contact
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="">
              Store
            </Link>
          </div>

          <div className="icon">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div
              className="cartIcon"
              onClick={() => {
                setopen(open === true ? false : true);
              }}
            >
              <ShoppingCartIcon />
              <span>{data.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
