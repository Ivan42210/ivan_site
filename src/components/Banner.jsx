
import '../styles/Banner.css'


function Banner({bannerImg, logo, text, title}){
    return(
        <div>
            <section className="banner">
                <img className="banner-image" src={bannerImg} alt="Banner" />
                
                     
                
                <div className="banner-text w-50">
                <img className='banner-logo' src={logo} alt="Ivan Chavaren" />
                    <h3>{title}</h3>
                    <h4>{text}</h4>
                </div>
            </section>
        </div>
    )
}

export default Banner;