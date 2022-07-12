import "../scss/linkshorten.scss";

const LinkShorten = ({originalLink, shortenedLink}) => {
    return (
        <div className="link-shorten flex ">
            <div className="link-shorten__original-link">
                {originalLink.length > 28 ? originalLink.slice(0, 28) + "..." : originalLink}
            </div>
            <div className="link-shorten__shortened-link">
                {shortenedLink}
            </div>
            <div className="link-shorten__button">
                <button className="button button--cyan">Copy</button>
            </div>
        </div>        
    )
}

export default LinkShorten;