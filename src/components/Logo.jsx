import '../scss/logo.scss';

const Logo = (props) => {
    return(
        <img className="logo" src={props.logoImage} alt="logo" />
    )
}

export default Logo;