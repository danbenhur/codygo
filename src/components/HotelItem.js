import React from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import classes from "../css/HotelItem.module.css";
import { useState } from "react";
import HotelDescription from "./HotelDescription";

const HotelItem = (props) => {
  const [showHotelDescription, setHotelDescription] = useState(false);
  const hotelData = props.hotelData;
  const { hotel_name, photo1 } = hotelData;

  const toggleHotelDescription = () => {
    setHotelDescription((showHotelDescription) => !showHotelDescription);
  };

  let hotelName = hotel_name;
  if (hotelName.length > 18) {
    hotelName = hotelName.substring(0, 10);
  }

  return (
    <Card>
      <div className={classes.hotel_item} onClick={toggleHotelDescription}>
        <h3>{hotelName}</h3>
        <img alt="" src={photo1} />
        <Button
          buttonClass={classes.hotel_item_button}
          buttonText="See More Details"
        />
      </div>
      {showHotelDescription && (
        <HotelDescription
          toggleDescription={toggleHotelDescription}
          hotelData={hotelData}
        />
      )}
    </Card>
  );
};

export default HotelItem;
