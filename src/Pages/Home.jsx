import Banner from "../components/Banner";
import '../styles/Home.css'
import logo from '../assets/logo_ivan.png';
import banner from '../assets/univers.jpg'
import CardSection from "../components/CardSection";

function Home({datas}) {

const BannerTitle = 'TRADUCTION - WEB DESIGN - FORMATION'
const textBanner = 'Un service humain avant tout'

  return (
    <div className="home page">
     <Banner 
     bannerImg={banner}
     logo={logo}
     text={textBanner}
     title={BannerTitle}
     />
    <CardSection 
    services={datas}/>
    </div>
  )
}

export default Home
