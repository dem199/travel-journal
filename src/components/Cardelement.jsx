import React from "react"

function Cardelement(props) {
    return (
        <section className="hero">
           <img 
                src={`../images/${props.imageUrl}`} 
                className="card--image"
            />
            <div className="map-details">
                <div className="map">
                    <div className="location-container">
                        <img src="../images/Fill 219.png" className="map--location" />
                        <p className="location">{props.location}</p>
                        
                    </div>
                    <a className="map-link" href={props.googleMapsUrl}>view on googlemaps </a>
                </div>
                <h1>{props.title}</h1>
                <h6>{props.startDate} - {props.endDate}</h6>
                <p className="description">{props.description}</p>
            </div>
        </section>
    )
}


export default Cardelement