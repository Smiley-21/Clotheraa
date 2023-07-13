import './Contact.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {Link} from 'react-router-dom';



const Contact=()=>{
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH</span>
                <div className="mail">
                    <input type="email" name="" id="" placeholder='Enter Your Email' />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <Link className='link' to="https://www.instagram.com">
                        <InstagramIcon className='icon'/>
                    </Link>

                    <Link className='link' to="https://www.facebook.com">
                        <FacebookIcon className='icon'/>
                    </Link>
                    <Link className='link' to="https://www.google.com">
                        <GoogleIcon className='icon'/>
                    </Link>
                    <Link className='link' to="https://www.twiiter.com">
                        <TwitterIcon className='icon'/>
                    </Link>
                    <Link className='link' to="https://pinterest.com/">
                        <PinterestIcon className='icon'/>
                    </Link>

                    

                </div>
            </div>
        </div>
    )
}

export default Contact;