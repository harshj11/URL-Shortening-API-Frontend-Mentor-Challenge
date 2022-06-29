import '../scss/linkinput.scss';

const LinkInput = () => {
    return(
        <div className="link__container flex flex-ai-c">
            <input className="link__container__input" type="text" placeholder="Shorten a link here..."/>
            <button className="link__container__button button--cyan">Shorten It!</button>
        </div>
    )
}

export default LinkInput;