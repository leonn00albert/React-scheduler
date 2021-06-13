import React from "react";

export const Tile = (props) => {
console.log(Object.values(props.item))
  return (
    <div key={props.key} className="tile-container">
      {Object.values(props.item).map((val, i) => {
     
        if(i === 0) {
          return <p className="tile-title" key={i}>{val}</p>
        }
        else {
          return <p className="tile" key={i}>{val}</p>
        }
      })}
    </div>
  );
};
