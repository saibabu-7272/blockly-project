import { useContext } from "react";
import { FaTwitter,FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import './index.css'
import AppContext from "../../AppContext";

const SocialLinks = () =>{
    const {darkTheme} = useContext(AppContext)
    const iconClass = darkTheme ? 'icon-light' : 'icon-dark'
    return(
    <ul className="social-links-container">
        <li className={`${iconClass} social-icon`}><FaFacebookF/></li>
        <li className={`${iconClass} social-icon`}><TiSocialInstagram/></li>
        <li className={`${iconClass} social-icon`}><FaTwitter/></li>
        <li className={`${iconClass} social-icon`}><TbBrandGithubFilled/></li>
        <li className={`${iconClass} social-icon`}><FaLinkedinIn/></li>
        <li className={`${iconClass} social-icon`}><FaTelegramPlane/></li>
    </ul>
)
} 

export default SocialLinks