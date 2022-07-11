import '../scss/linkinput.scss';
import { useState, createRef } from 'react';

import LinkShortenContainer from './LinkShortenContainer';
import axios from 'axios';

const LinkInput = () => {

    const [textValue, setTextValue] = useState("");
    const [errorText, setErrorText] = useState("");
    const inputRef = createRef();

    const handleClick = (event) => {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${textValue}`)
            .then(response => {
                console.log(response)
                if (inputRef.current.classList.contains("focus")) {
                    inputRef.current.classList.remove("focus");
                    setErrorText("");
                }
            })
            .catch(err => {
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

    const handleChange = (event) => {
        setTextValue(event.target.value);
    }

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
                <button className="link__container__button button--cyan" onClick={handleClick}>Shorten It!</button>
                <span className="link__container__error">
                    <em>{errorText}</em>
                </span>
            </div>
            <LinkShortenContainer />
        </section>
    )
}

export default LinkInput;