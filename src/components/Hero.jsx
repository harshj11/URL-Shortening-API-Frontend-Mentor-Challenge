import heroImage from '../images/illustration-working.svg';
import '../scss/hero.scss';

const Hero = () => {
    return(
        <section className="hero">
            <div className="hero__image-container">
                <img src={heroImage} className="hero__image" alt="hero"></img>
            </div>
            
            <div className="hero__content">
                <h1>More than just shorter links</h1>
                <div className="hero__content__desc">
                    <p>
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                </p>
                </div>
                <button className="button button--cyan">Get Started</button>
            </div>
        </section>
    )
}

export default Hero;