import React from "react";
import "./../Header/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ botonRetroceder }) {
  const history = useHistory();

  return (
    <div className="header">
      {botonRetroceder ? (
        <IconButton onClick={() => history.replace(botonRetroceder)}>
          <ArrowBackIosIcon
            fontSize="large"
            className="header__botonretroceder"
          />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
          className="header__logo"
          alt="logo "
        ></img>
      </Link>

      <Link to="/chats">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
