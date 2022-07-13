import '../scss/linkinput.scss';
import { useState, useRef } from 'react';
import axios from 'axios';
import LinkShorten from './LinkShorten';
import { Fragment } from 'react';

const LinkInput = () => {

    const [textValue, setTextValue] = useState("");
    const [errorText, setErrorText] = useState("");
    const [loadingAttributes, setLoadingAttributes] = useState({disabled: false, loading: false});

    let localStorageValues = JSON.parse(window.localStorage.getItem('links'));
    if(localStorageValues == null)
        localStorageValues = []

    const [recentLinks, setRecentLinks] = useState(localStorageValues);
    const inputRef = useRef(null);
    const handleClick = (event) => {
        setLoadingAttributes({disabled: true, loading: true});
        axios.get(`https://api.shrtco.de/v2/shorten?url=${textValue}`)
            .then(response => {
                recentLinks.unshift({
                    original_link: response.data.result.original_link,
                    shortened_link: response.data.result.full_short_link
                });

                if (recentLinks.length > 3)
                    recentLinks.pop();
                window.localStorage.setItem('links', JSON.stringify(recentLinks));
                
                setRecentLinks([...recentLinks]);
                setLoadingAttributes({disabled: false, loading: false});
                
                if (inputRef.current.classList.contains("focus")) {
                    inputRef.current.classList.remove("focus");
                    setErrorText("");
                }
            })
            .catch(err => {
                setLoadingAttributes({disabled: false, loading: false});
                const errorData = err.response.data;
                inputRef.current.classList.add("focus");
                switch (errorData.error_code) {
                    case 1: setErrorText("No URL specified!");
                        break;
                    case 2: setErrorText("Invalid URL!");
                        break;
                    case 3: setErrorText("Wait a second and try again!");
                        break;
                    case 10: setErrorText("Link can't be shorten!");
                        break;
                    default: setErrorText("Unknown Error, Please try after sometime!");
                }
            })

    }

    const handleChange = (event) => setTextValue(event.target.value);

    return (
        <section className="link">
            <div className="link__container flex flex-ai-c">
                <input 
                    className="link__container__input" 
                    type="text" 
                    placeholder="Shorten a link here..." 
                    onChange={handleChange} 
                    value={textValue}
                    ref={inputRef}
                />
                <button 
                    className="link__container__button button--cyan" 
                    disabled={loadingAttributes.disabled}
                    onClick={handleClick}
                >
                    {loadingAttributes.loading ? "Loading..." : "Shorten It!"}
                </button>
                <span className="link__container__error">
                    <em>{errorText}</em>
                </span>
            </div>
            
            <div className="link-shorten-container">
                {
                    recentLinks.map((link, index) => {
                        return(
                            <Fragment key={index}>
                                <LinkShorten 
                                    originalLink={link.original_link} 
                                    shortenedLink={link.shortened_link}
                                />
                            </Fragment>
                        )
                    }
                )}
            </div>

        </section>
    )
}

export default LinkInput;