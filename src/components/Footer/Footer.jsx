import "./Footer.css";
import logo from "../../assets/FORF.png";
import NaSaLogo from "../../assets/logoNasa.png";

const Footer = ( ) => {
 return (
    <div className="Footer">
     <div className="Logo">
      <img src={logo} alt="FORF"/>
     </div>
     <div className="ContactUs">
        <div className="ContactUsTitle">
         Contact us:
        </div>
        <div className="ContactUsContacts">
         <div className="Col LeftCol">
          <div>
           Salamanovych Anna designer, developer, manager
          </div>
          <div>
           Yaroslav 1 frontend developer
          </div>
         </div>
         <div className="Col RightCol">
          <div>
           Yaroslav 2 backend developer
          </div>
          <div>
           Nikita frontend developer
          </div>
         </div>
        </div>
     </div>
     <div className="NaSaLogo">
        <img src={NaSaLogo} alt="NASA"/>
     </div>
    </div>
 )
}

export default Footer;