import React from "react";
import Card from "./UI/Card";
import Portal from "react-dom";

import classes from "../css/HotelDescription.module.css";

const HotelDescription = (props) => {
  const {
    addressline1,
    chain_name,
    city,
    country,
    hotel_id,
    hotel_name,
    key,
    photo1,
  } = props.hotelData;
  const HotelDetails = () => {
    return <div> DASd</div>;
  };
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
  };
  return (
    <>
      {Portal.createPortal(
        <Backdrop />,
        document.getElementById("hotel-description-backdrop")
      )}
      {Portal.createPortal(
        <HotelDetails />,
        document.getElementById("hotel-description-content")
      )}
    </>
  );
};

export default HotelDescription;
