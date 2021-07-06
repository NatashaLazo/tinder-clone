import React from "react";
import "./../ListChats/Chats.css";
import ChatPrevisualizacion from "../ChatPrev/ChatPrevisualizacion";

function Chats() {
  return (
    <div className="chats">
      <ChatPrevisualizacion
        nombre="Taylor"
        mensaje="Hola que tal!!"
        timestamp="Hace 40seg"
        imgPerfil="https://w1.pngwing.com/pngs/726/597/png-transparent-graphic-design-icon-customer-service-avatar-icon-design-call-centre-yellow-smile-forehead.png"
      />

      <ChatPrevisualizacion
        nombre="Lana"
        mensaje="Hola que tal!!"
        timestamp="hace 1h"
        imgPerfil="https://w1.pngwing.com/pngs/726/597/png-transparent-graphic-design-icon-customer-service-avatar-icon-design-call-centre-yellow-smile-forehead.png"
      />

      <ChatPrevisualizacion
        nombre="Selena"
        mensaje="Hola que tal!!"
        timestamp="Hace 2 dias"
        imgPerfil="https://w1.pngwing.com/pngs/726/597/png-transparent-graphic-design-icon-customer-service-avatar-icon-design-call-centre-yellow-smile-forehead.png"
      />

      <ChatPrevisualizacion
        nombre="Maria"
        mensaje="Hola que tal!!"
        timestamp="Hace 1 semana"
        imgPerfil="https://w1.pngwing.com/pngs/726/597/png-transparent-graphic-design-icon-customer-service-avatar-icon-design-call-centre-yellow-smile-forehead.png"
      />
    </div>
  );
}

export default Chats;
