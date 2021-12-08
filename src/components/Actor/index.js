import React from "react";
import { Wrapper, Image } from "./Actor.styles";
import PropTypes from "prop-types";

const Actor = ({ name, imageUrl, character }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
