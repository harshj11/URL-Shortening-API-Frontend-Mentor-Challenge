import logo from '../images/logo.svg';
import '../scss/logo.scss';

const Logo = () => {
    return(
        <img className="logo" src={logo} alt="logo" />
    )
}

export default Logo;