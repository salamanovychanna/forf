import { Link } from "react-router-dom";
import FullLogo from "../FullLogo/FullLogo";
import "./Header.css";

const Header = () => {
    return (
        <header style={{
            zIndex: '2',
            position: "relative",
            overflow: 'visible',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            maxwidth: '1280px',
            padding: '0px 160px'
        }}>
            <div className="Blue-sphere"></div>
            <Link  style={{zIndex:2}} to={"/"}>
                <div className="LogoHeader" style={{marginRight: '230px'}}><FullLogo/></div>
            </Link>
            <nav style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <Link style={{textDecoration: "none"}} to={"/dashboard"}> <span>dashboard</span></Link>
                <Link style={{textDecoration: "none"}} to={"/ai-chat"}> <span>ask AI</span></Link>
                <Link style={{textDecoration: "none"}} to={"/blogs"}><span>blog</span></Link>
                <Link style={{textDecoration: "none"}} to={"/dashboard"}>
                    <button>go to dashboard</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;