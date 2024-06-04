import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ( { objects } ) => {
  const tilesArray = [];
  objects.map( ( { name, ...rest }, index ) => {
    tilesArray.push(
      <Tile
        name={ name }
        description={ rest }
        key={ index } />
    );
  });

  return (
    <div>
      { tilesArray }
    </div>
  );
};
