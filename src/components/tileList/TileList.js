import React from "react";
import {Tile} from '../tile/Tile';
export const TileList = (props) => {
  return (
    <div>
      {props.items.map((item,i) => {
        return <Tile key={i} item={item}/>
      })}
    </div>
  );
};
