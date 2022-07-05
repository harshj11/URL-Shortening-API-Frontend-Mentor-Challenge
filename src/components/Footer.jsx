import Logo from './Logo';

import { ReactComponent as IconFacebook} from '../images/icon-facebook.svg';
import { ReactComponent as IconTwitter} from '../images/icon-twitter.svg';
import { ReactComponent as IconPinterest} from '../images/icon-pinterest.svg';
import { ReactComponent as IconInstagram} from '../images/icon-instagram.svg';

import '../scss/footer.scss';

import logoImage from '../images/logo-light.svg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__logo">
                <Logo logoImage={logoImage} />
            </div>
            <div className="footer__section footer__features">
                <div className="footer__title">
                    <strong>Features</strong>
                </div>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>

            <div className="footer__section footer__resources">
                <div className="footer__title">
                    <strong>Resources</strong>
                </div>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>

            <div className="footer__section footer__company">
                <div className="footer__title">
                    <strong>Company</strong>
                </div>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="footer__section footer__socials">
                <div className="footer__socials__icon">
                    <IconFacebook />
                </div>
                <div className="footer__socials__icon">
                    <IconTwitter />
                </div>
                <div className="footer__socials__icon">
                    <IconPinterest />
                </div>
                <div className="footer__socials__icon">
                    <IconInstagram />
                </div>
            </div>
        </footer>
    )
}

export default Footer;