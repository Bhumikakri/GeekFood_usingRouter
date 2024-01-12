import './footer.css';

function Footer() {
    return(
        <div className="footer">
            <div className="AllContens">
                <div className="Footer_logo">
                    <i class="fa-solid fa-warehouse"></i>
                    <h2>Logoipsum</h2>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                <div className="tabs">
                    <a href="#">About</a>
                    <a href="#">Careers</a>
                    <a href="#">History</a>
                    <a href="#">Services</a>
                    <a href="#">Projects</a>
                    <a href="#">Blog</a>
                </div>

                <div className="all_Icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i> 
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-solid fa-basketball"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer;