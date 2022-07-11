import "../scss/linkshorten.scss";

const LinkShorten = () => {
    return (
        <div className="link-shorten flex ">
            <div className="link-shorten__original-link">
                https://www.frontendmentor.io           
            </div>
            <div className="link-shorten__shortened-link">
                https://rel.ink/gXorPsf9
            </div>
            <div className="link-shorten__button">
                <button className="button button--cyan">Copy</button>
            </div>
        </div>        
    )
}

export default LinkShorten;