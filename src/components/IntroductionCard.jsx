function IntroductionCard({introduction}){
    return(
        <div>
            <article key={introduction.index} className="home-card">
            <img className="home-card-thumbnail" src={introduction.image} alt={introduction.title} />
            <div className="home-card-body">
                <h3 className="home-card-title">{introduction.title}</h3>
                <p className="home-card-text">{introduction.text}</p>
                
            </div>
        </article>
        </div>
    )
}

export default IntroductionCard;