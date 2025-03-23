import { Link } from "react-router-dom";
import './styles/landingpagestyle.css';
import Footer from "../components/Footer";

//TODO: This is not the best practice since it ain't modular n still can be separated to smaller components
//I don't know react tho lmao
function LandingPage() {
    return (
        <div className="landing-page">
            <div className="landing-banner">
                <h1>Welcome to Nippon CE!</h1>
                <p>Tutorial on how to make mediocre ODP Banking guys salty <br />
                (Read: Learn how to speak Japanese and find employment here!)
                </p>
                <Link to="/home">
                    <button className="btn btn-primary get-started-btn">
                        Get Started
                    </button>
                </Link>
                <button className="btn btn-secondary discord-btn">
                    <i className="fa-brands fa-discord me-3"></i>
                    Join our Discord
                </button>
            </div>

            <div className="landing-page-cards">
                <div className="card-banner">
                    <h2>For Computer Engineering Students!</h2>
                    <p>For Computer Engineering Students! Dont invite IF niggas here fuck you</p>
                </div>
                <div className="card-banner">
                    <h2>IF UNDIP is Banned Here!</h2>
                    <p>HA↗HA↘HA↗HA↘HA↗ <br/>
                    If you see one please enact an IP Ban on 'em and report to the authority
                    </p>
                </div>
                <div className="card-banner">
                    <h2>Sasjep sucks ball</h2>
                    <p>HA↗HA↘HA↗HA↘HA↗ <br/>
                    <b>UKT 6.5 JUTA CUMA PUNYA N3 BOSSSS ????</b>
                    </p>
                </div>
            </div>

            <div className="landing-page-detail">
                <h2>Example</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit consequuntur aspernatur saepe quis! Consectetur officiis sint voluptate esse ipsam, reprehenderit vitae cumque, quasi in minus voluptatum similique molestias fuga pariatur?</p>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;
