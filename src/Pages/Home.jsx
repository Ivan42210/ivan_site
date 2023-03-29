import Banner from "../components/Banner";
import '../styles/Home.css'
import logo from '../assets/logo_ivan.png';
import banner from '../assets/univers.jpg'
import CardSection from "../components/CardSection";
import IntroductionPart from "../components/IntroductionPart";

function Home({datas, dataHome}) {

const BannerTitle = 'TRADUCTION - WEB DESIGN - FORMATION'
const textBanner = 'Un service humain avant tout'

  return (
    <div className="home">
     <Banner 
     bannerImg={banner}
     logo={logo}
     text={textBanner}
     title={BannerTitle}
     />
    <div className="page">
    <CardSection 
    services={datas}/>
    <h3 className="home-part-title">Vous désirez</h3>
    <IntroductionPart introductions={dataHome}/>
    </div>
    </div>
  )
}

export default Home
