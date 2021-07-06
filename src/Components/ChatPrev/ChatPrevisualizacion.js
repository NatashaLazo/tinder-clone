import React from "react";
import { Avatar } from "@material-ui/core";
import "../ChatPrev/ChatPrevi.css";
import { Link, useHistory } from "react-router-dom";

function ChatPrevisualizacion({ nombre, mensaje, timestamp, imgPerfil }) {
  return (
    <Link to={`/chat/${nombre}`}>
      <div className="ChatPrevisualizacion">
        <Avatar
          className="ChatPrevisualizacion__imagen"
          alt={nombre}
          src={imgPerfil}
        />
        <div className="ChatPrevisualizacion__detalles">
          <h2>{nombre}</h2>
          <p>{mensaje}</p>
        </div>
        <p className="ChatPrevisualizacion__time">{timestamp}</p>
      </div>
    </Link>
  );
}

export default ChatPrevisualizacion;
