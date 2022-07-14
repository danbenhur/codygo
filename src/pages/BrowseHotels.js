import LeftBar from "../components/LeftBar";
import HotelsBoxes from "../components/HotelsBoxes";
import classes from "../css/BrowseHotels.module.css";
import Button from "../components/UI/Button";

const BrowseHotels = () => {
  //if (selectedChains.length === 0) {

  //}

  //  else {
  //   displayedHotels = hotels.filter().map((hotel) => {
  //     return <HotelItem hotelData={hotel} key={hotel.key} />;
  //   });
  // }

  return (
    <>
      {/* <Button
        buttonClass={classes.create_hotel_button}
        buttonText="CREATE A NEW HOTEL"
      /> */}
      <div className={classes.browse_hotels}>
        <LeftBar />
        <HotelsBoxes />
      </div>
    </>
  );
};

export default BrowseHotels;
