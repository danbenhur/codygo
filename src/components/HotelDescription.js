import React from "react";
import Card from "./UI/Card";
import Portal from "react-dom";
import Button from "./UI/Button";
import CloseButton from "./UI/CloseButton";
import classes from "../css/HotelDescription.module.css";

const HotelDescription = (props) => {
  const { addressline1, chain_name, city, country, hotel_name, photo1 } =
    props.hotelData;

  const HotelDetails = () => {
    return (
      <Card className={classes.hotel_details}>
        <div className={classes.details_properties}>
          <div className={classes.details_properties_text}>
            <h2>{hotel_name}</h2>
            <h3>{chain_name}</h3>
            <p>{country}</p>
            <h3>{city}</h3>
            <p>{addressline1}</p>
          </div>
          {/* <Button buttonText /> */}
        </div>

        <div className={classes.details_img}>
          <img alt="" src={photo1} />
        </div>
        <CloseButton closeItem={props.toggleDescription} />
      </Card>
    );
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
