import IntroductionCard from "./IntroductionCard"

function IntroductionPart({introductions}){
    return(
        <section className="home-introduction-section">
           {introductions.map( (el) => (
                <IntroductionCard introduction={el}/>
           ))}
        </section>
    )
}
export default IntroductionPart;