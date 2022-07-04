import '../scss/header.scss';
import { Hamburger } from './Hamburger';
import { createRef } from 'react';
import Logo from './Logo';

const Header = () => {
    const menuRef = createRef();
    const menuDisplay = (window.innerWidth < 639) ? "d-none" : "";
    const handleClick = (e) => {
        menuRef.current.classList.toggle("d-none");
    }

    return (
        <section className="header flex flex-jc-sb flex-ai-c">
            <Logo />
            <div className={`flex flex-jc-sb hamburger-content ${menuDisplay}`} ref={menuRef}>
                <div className="flex flex-jc-c flex-ai-c">
                    <div className="header__links">
                        <ul className="nav-links flex">
                            <li><strong>Features</strong></li>
                            <li><strong>Pricing</strong></li>
                            <li><strong>Resources</strong></li>
                        </ul>
                    </div>
                </div>
                <div className="header__buttons flex">
                    <button className="button button--none">Login</button>
                    <button className="button button--cyan">Sign Up</button>
                </div>
            </div>
            <Hamburger onClick={handleClick}/>
        </section>
    )
}

export default Header;