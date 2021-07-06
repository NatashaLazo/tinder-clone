import React from "react";
import { useState } from "react";
import "../Cards/Cards.css";
import CardsPersona from "react-tinder-card";

function Cards() {
  const [persona, setPersona] = useState([
    {
      nombre: "Selena Gomez",
      url: "https://i1.wp.com/instyle.mx/wp-content/uploads/2020/09/selena-rare.jpg?fit=1024%2C1024&ssl=1"
    },
    {
      nombre: "Taylor Swift",
      url: "https://images.clarin.com/2020/08/01/taylor-swift-nos-cuenta-como___Rnoyy8KbH_720x0__1.jpg"
    },
    {
      nombre: "Lana Del Rey",
      url: "https://i.pinimg.com/originals/bf/89/9d/bf899d3a5805844d6851be52a761dc9c.jpg"
    }
  ]);

  return (
    <div className="cards">
      <div className="cards__contenedor">
        {persona.map((persona) => (
          <CardsPersona
            className="swipe"
            key={persona.nombre}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${persona.url})` }}
            >
              <h2>{persona.nombre}</h2>
            </div>
          </CardsPersona>
        ))}
      </div>
    </div>
  );
}

export default Cards;
