import React from "react";
import "./carditem.css";
const Carditem = (props) => {
  let {title,image}=props
  return (
    <>
    {/* <div className="main"> */}
      <div className="cards">
        <div className="card">
          <img src={image} alt="" />
          <div className="content">
            <h1>{title}</h1>
            {/* <p>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, fugiat.
            </p> */}
            <a href="#" className="btn">Add To Cart</a>
          </div>
        </div>
       </div>
    {/* </div> */}
    </>
  );
};

export default Carditem;
