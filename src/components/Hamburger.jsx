import '../scss/hamburger.scss';

export const Hamburger = (props) => {
    return (
        <div className="hamburger" onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}