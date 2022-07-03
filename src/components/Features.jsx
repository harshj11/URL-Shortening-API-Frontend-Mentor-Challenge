import { Fragment } from "react";
import "../scss/features.scss";
import featureCardContent from '../utils/FeatureCardContent';
import FeatureCard from "./FeatureCard";

const Features = (props) => {
    
    return(
        <section className="feat">
            <div>
                <h2 className="feat__header">
                    Advanced Statistics
                </h2>
                <p className="feat__info">
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
            </div>

            <div className="feat__features">
                {
                    featureCardContent.map((content, index) => {
                        let marginTop = 5.5;
                        if(window.innerWidth > 1023)
                            marginTop += (index * 2.5);
                        return (
                            <Fragment key={content.key}>
                                <FeatureCard
                                    index={index}
                                    alt={content.altText}
                                    icon={content.icon}
                                    length={featureCardContent.length}
                                    header={content.header}
                                    info={content.info}
                                    style={{marginTop: `${marginTop}rem`}}
                                />
                            </Fragment>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Features;