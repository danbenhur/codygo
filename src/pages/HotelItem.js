import React from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import classes from "../css/HotelItem.module.css";
import { useState } from "react";
import HotelDescription from "../components/HotelDescription";

const HotelItem = (props) => {
  const [showHotelDescription, setHotelDescription] = useState(false);

  const { hotel_name, photo1 } = props.hotelData;
  const hotelData = props.hotelData;

  const toggleHotelDescription = () => {
    setHotelDescription((showHotelDescription) => !showHotelDescription);
    console.log(showHotelDescription);
  };
  let hotelName = hotel_name;
  if (hotelName.length > 25) {
    hotelName = hotelName.substring(0, 10);
  }

  return (
    <Card>
      <div className={classes.hotel_item} onClick={toggleHotelDescription}>
        <h3>{hotelName}</h3>
        <img alt="" src={photo1} />
        <Button
          buttonClass={classes.hotel_item_button}
          buttonAction={toggleHotelDescription}
          buttonText="See More Details"
        />
      </div>
      {showHotelDescription && <HotelDescription hotelData={hotelData} />}
    </Card>
  );
};

export default HotelItem;
