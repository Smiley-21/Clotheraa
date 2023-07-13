import './Footer.scss'

const Footer=()=>{
    return (
        <div className="footer">
            {/* Top */}
        <div className="top">
            {/* Item1 */}
            <div className="item">
                <h2>Categories</h2>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>

            </div>

            {/* Item2 */}
            <div className="item">
                <h2>Links</h2>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            {/* Item3 */}
            <div className="item">
                <h2>About</h2>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum laborum omnis fugit unde sit asperiores odit laboriosam facere quaerat distinctio.</span>
            </div>

            {/* Item4 */}
            <div className="item">
                <h2>Contact</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit praesentium nostrum corporis nihil ipsum molestias perspiciatis molestiae totam saepe doloremque.</span>
            </div>
        </div>


        {/* Bottom */}
        <div className="bottom">
            <div className="left">
                <div className="logo">Clothera</div>
                <div className="copyright">All rights are Reserved © Clothera</div>
            </div>
            <div className="right">
                <img src="/img/payment.png" alt="" />
            </div>
        </div>

        </div>
    )
}

export default Footer