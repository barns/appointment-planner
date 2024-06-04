import React from "react";

export const Tile = ( { name, description } ) => {
  const descriptionsArray = [];

  for ( let descItem in description ) {
    descriptionsArray.push(<p>{ description[descItem] }</p>)
  }

  return (
    <div className="tile-container" >
      <p className="tile-title">{ name }</p>
      { descriptionsArray }
    </div>
  );
};
