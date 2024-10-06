import { Link } from "react-router-dom";
import FullLogo from "../FullLogo/FullLogo";

const Header = () => {
    return (
        <header style={{zIndex:'2',position: "relative",overflow:'visible', height: '100px', display: 'flex', alignItems: 'center', maxwidth: '1280px', padding: '0px 160px' }}>
            <div style={{zIndex:'1',position: 'absolute', top: '10px', left: '40px'}}><svg width="568" height="431" viewBox="0 0 568 431" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_27_297)">
                    <rect x="42" y="-95" width="326" height="326" rx="163" fill="#0032A0" />
                </g>
                <defs>
                    <filter id="filter0_f_27_297" x="-158" y="-295" width="726" height="726" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_27_297" />
                    </filter>
                </defs>
            </svg></div>
            <div style={{ marginRight: '230px' }}><FullLogo /></div>
            <nav style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Link style={{ textDecoration: "none" }} to={"/dashboard"}> <span>dashboard</span></Link>
                <Link style={{ textDecoration: "none" }} to={"/"}> <span>ask AI</span></Link>
                <Link style={{ textDecoration: "none" }} to={"/blogs"}><span>blog</span></Link>
                <Link style={{ textDecoration: "none" }} to={"/dashboard"}><button>go to dashboard</button></Link>
            </nav>
        </header>
    )
}

export default Header;