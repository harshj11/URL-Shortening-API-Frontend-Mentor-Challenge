import '../scss/linkinput.scss';
import { useState, createRef } from 'react';

import LinkShortenContainer from './LinkShortenContainer';

const LinkInput = () => {

    const [textValue, setTextValue] = useState("");
    const [errorText, setErrorText] = useState("");
    const inputRef = createRef();

    const handleClick = (event) => {
        if(textValue.trim().length === 0) {
            inputRef.current.classList.add("focus");
            setErrorText("Please add a link");
        } else {
            if(inputRef.current.classList.contains("focus")) {
                inputRef.current.classList.remove("focus");
                setErrorText("");
            }
        }
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