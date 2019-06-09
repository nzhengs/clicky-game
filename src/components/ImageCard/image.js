import React from "react";
import "../ImageCard/image.css"

function ImageCard(props) {
  return (
    <div className="card container col-3 ">
      <div className="img-container ">
        <img alt={props.imageCard.id} src={props.imageCard.imageLink} className="image-icon"
         onClick={()=> {
           props.clickImage(props.imageCard.id)
         }}/>
      </div>
    </div>
  );
}

export default ImageCard;
