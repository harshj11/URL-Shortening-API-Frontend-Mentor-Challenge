const FeatureCard = ({key, altText, icon, header, index, info, length, style}) => {
    return (
        <div className="feat-card" style={style}>
            <div className="feat-card__icon flex flex-ai-c flex-jc-c">
                <img alt={altText} src={icon} />
            </div>
            <h5 className="feat-card__title">{header}</h5>
            <p className="feat-card__desc">
                {info}
            </p>
            {
                index !== length - 1 ? <div className="feat-card__connector"></div> : null
            }
        </div>
    )
}

export default FeatureCard;