import Card from "./Card"
import '../styles/Card.css'

function CardSection({services}){
 return(
    <section className="card-section">
        {services.map( service => (
            <Card 
            service={service}/>
        )) }

    </section>
 )
}

export default CardSection;