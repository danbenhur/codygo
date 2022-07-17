import classes from "../css/HotelsBoxs.module.css";
import { hotels } from "./hotels";
import HotelItem from "./HotelItem";
import { useSelector } from "react-redux";

const HotelsBoxs = () => {
  const allUnchecked = useSelector((state) => state.chains.allUnchecked);
  console.log("hotel boxes" + allUnchecked);

  const filteredChains = useSelector((state) => state.chains.selectedChains);

  let displayedHotels;
  if (allUnchecked) {
    displayedHotels = hotels.map((hotel) => {
      return <HotelItem hotelData={hotel} key={hotel.key} />;
    });
  } else {
    displayedHotels = hotels
      .filter((hotel) => {
        return filteredChains.includes(hotel.chain_name);
      })
      .map((hotel) => {
        return <HotelItem hotelData={hotel} key={hotel.key} />;
      });
  }

  return (
    <>
      <div className={classes.hotels_grid}>{displayedHotels}</div>
    </>
  );
};

export default HotelsBoxs;
