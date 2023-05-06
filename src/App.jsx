import React from "react"
import Navbarelement from "./components/Navbarelement.jsx"
import Cardelement from "./components/Cardelement.jsx"
import data from "./data.js"

export default function App() {
    const cards = data.map(item => {
        return (
            <Cardelement
                key={item.id}
                {...item}
                
            />
        )
    })        
    
    return (
        <div className="container">
            <Navbarelement />
           
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}