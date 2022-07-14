import "../scss/linkshorten.scss";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

const LinkShorten = ({originalLink, shortenedLink}) => {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => setIsCopied(true);

    return (
        <div className="link-shorten flex ">
            <div className="link-shorten__original-link">
                {
                    window.innerWidth > 1023 && originalLink.length > 32 
                    ? originalLink.slice(0, 40) + "..." : window.innerWidth > 638 && window.innerWidth <= 1023
                    ? originalLink.slice(0, 20) + "..." : originalLink.slice(0, 28) + "..."
                }
            </div>
            <div className="link-shorten__shortened-link">
                {shortenedLink}
            </div>
            <div className="link-shorten__button">
                <CopyToClipboard text={shortenedLink}>
                    <button 
                        className={isCopied ? "button button--darkViolet" : "button button--cyan"} 
                        onClick={handleCopyClick}
                    >
                        { isCopied ? "Copied!" : "Copy" }
                    </button>
                </CopyToClipboard>
            </div>
        </div>        
    )
}

export default LinkShorten;