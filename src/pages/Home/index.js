 import { useContext } from 'react'
import AppContext from '../../AppContext'
import './index.css'
import Header from '../../components/Header'
import Profile from '../../assets/Image.png'
import SocialLinks from '../../components/SocialLinks'

const Home = () => {
    const {darkTheme} = useContext(AppContext)
    const themeClass = darkTheme ? 'dark-theme' : 'ligh-theme';
    return(
    <>
    <Header />
    <div className={`${themeClass} home-page`}>
        <div className='flex-container'>
            <SocialLinks />
        <div className='display-container'>
            <div>
                <div className='badge'>
                    <p className='badge-text'>Hello!</p>
                </div>
                <h1 className='title-text'>I'm <span className='name'>Anish</span></h1>
                <p className='description'>
                    UI/UX Designer,Frontend Developer & Thinker.
                    Based in India.
                </p>
                <button className='btn cv-btn'>Download CV</button>
                <button className='btn get-in-touch-btn'>Get in Touch!</button>
            </div>
            <img className='profile' src={Profile} alt="profile" />
        </div>

        </div>
        
    </div>
    </>
)
} 

export default Home