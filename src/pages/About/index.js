import { useContext } from 'react'
import AppContext from '../../AppContext'
import './index.css'
import Header from '../../components/Header'
import SocialLinks from '../../components/SocialLinks'


const About = () =>{
    const {darkTheme} = useContext(AppContext)
    const themeClass = darkTheme ? 'about-dark' : 'about-light';
    const objectiveClass = darkTheme ? 'dark-content' : 'light-content';
    return(
    <>
        <Header />
        <div className={`${themeClass} about-page`}>
            <div className='flex-container'>
                <SocialLinks />
                <div className={`${objectiveClass} content-box`}>
                    <div className='about-title-flex'>
                        <h1><span className='big-letter'>T</span>his is it. ;)</h1> <div className='line1'></div>
                    </div>
                    
                    <p className='objective'>Anish Kr. Sinha is an Indian <b>UI/UX Designer & Front End Developer</b> with a passion for designing beautiful and fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.<br/>
                        He holds a <b>bachelor degree in Computer Applications</b>. During his graduation, he has been actively involved in the web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, <b>India</b>. Where he’s working as an independent creative.
                        <br />
                        <br />
                        His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <b>3D floor plan</b>.
                        <br />
                        <br />
                        When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.</p>
                    <div className='line2'></div>
                </div>
            </div>
        </div>
    </>
)
} 

export default About