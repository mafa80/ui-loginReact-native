import React, { Component } from "react";
import { Icon, Button, Card, Tile, Header } from "react-native-elements";

const imgbg = require("../../imagenes/fondo.jpg");

export default function TileStyled() {
  return (
    <Tile
      imageSrc={imgbg}
      title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
      featured
      caption="Some Caption Text"
    />
  );
}
