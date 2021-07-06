import React from "react";
import "./../Buttons/Buttons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

function Buttons() {
  return (
    <div className="ButtonsSwipe">
      <IconButton className="button__replay">
        <ReplayIcon fontSize="large" />
      </IconButton>

      <IconButton className="button__close">
        <CloseIcon fontSize="large" />
      </IconButton>

      <IconButton className="button__start">
        <StarIcon fontSize="large" />
      </IconButton>

      <IconButton className="button__favorite">
        <FavoriteIcon fontSize="large" />
      </IconButton>

      <IconButton className="button__flash">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Buttons;
