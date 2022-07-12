import hotels from "../components/hotels";
import HotelItem from "./HotelItem";
import classes from "../css/BrowseHotels.module.css";

const BrowseHotels = () => {
  console.log(hotels);
  const displayedHotels = hotels.map((hotel) => {
    return <HotelItem hotelData={hotel} key={hotel.key} />;
  });

  return (
    <>
      <p>ADD A NEW HOTEL</p>
      <div className={classes.hotels_grid}>{displayedHotels}</div>
    </>
  );
};

export default BrowseHotels;
