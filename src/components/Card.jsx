import { Link } from "react-router-dom";


function Card({service}){
    

    return(
        <div className="card">
            <img className="card-thumbnail" src={service.thumbnail} alt={service.name} />
            <div className="card-body">
                <h3 className="card-title">{service.name}</h3>
                <p className="card-text">{service.introduction}</p>
            </div>
            <Link className="card-btn" to={`/services/${service.name.toLowerCase()}`}>
                En savoir plus
            </Link>
        </div>
    )
}


export default Card;


