import { useContext } from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../../AppContext'
import './index.css'
import LogoImageDark from '../../assets/Logo-dark.png'
import LogoImageLight from '../../assets/logo-light.png'
import sunImage from '../../assets/sun.png'
import moonImage from '../../assets/moon.png'






const Header = () =>{
        const {darkTheme, toggleTheme} = useContext(AppContext)
        const themeClass = darkTheme ? 'dark-theme' : 'ligh-theme';
        const textColor = darkTheme ? 'light' : 'dark';
        const LogoImage = darkTheme ? LogoImageLight : LogoImageDark;
        const themeLogo = darkTheme ? sunImage : moonImage;
    return(
    <header className={`${themeClass} header`}>
        <div className='web-logo-title-container'>
            <img className='logo' src={LogoImage} alt="logo" /><h1 className='website-name'>ANISH KUMAR SINHA</h1>
        </div>
        
        <ul className='tabs-container'>
            <Link className={`${textColor} link`} to="/"><li><p className='tab'>Home</p></li></Link>
            <Link className={`${textColor} link`} to="/about"><li><p className='tab'>About</p></li></Link>
            <li><p className='tab'>Resume</p></li>
            <li><p className='tab'>Skills</p></li>
            <li><p className='tab'>Contact</p></li>
            <li><button className='theme-btn' onClick={toggleTheme}><img className='logo' src={themeLogo} alt="theme" /></button></li>
        </ul>
        
    </header>
)
} 

export default Header