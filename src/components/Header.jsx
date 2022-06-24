import '../scss/header.scss';
import logo from '../images/logo.svg';
import { Hamburger } from './Hamburger';

const Header = () => {
    return (
        <section className="header flex flex-jc-sb flex-ai-c">
            <div className="flex flex-ai-c">
                <img className="logo" src={logo} alt="logo" />
                <div>
                    <ul className="nav-links flex">
                        <li><strong>Features</strong></li>
                        <li><strong>Pricing</strong></li>
                        <li><strong>Resources</strong></li>
                    </ul>
                </div>
            </div>
            <Hamburger />
            <div className="header__buttons">
                <button className="button--none">Login</button>
                <button className="button--cyan">Sign Up</button>
            </div>
        </section>
    )
}

export default Header;