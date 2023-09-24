import React from "react";
import "../styles/Image.css";
import hotelImage from "../assets/hotel-img.webp";
function Image() {
  return (


<div className="image-main-conatiner">  
<div className="Image-Container"> 
   <div className=".second-image-container">
        <img src={hotelImage} alt="hotel-Image" className="hotel-image" />
      </div>
      </div>
      <div className="text-container">
        <h1 className="About-hotel">About Hotel</h1>
        <p className="image-text">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. <br /> <br /> A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
      </div>

      </div>

    
  );
}

export default Image;
