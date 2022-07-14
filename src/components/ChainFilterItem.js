import { click } from "@testing-library/user-event/dist/click";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chainsActions } from "../store/chains-slice";

const ChainFilterItem = (props) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const howManySelectedItems = useSelector(
    (state) => state.chains.selectedChains
  );

  const isAllUnchecked = useSelector((state) => state.chains.allUnchecked);

  const chainName = props.name;

  const handleChange = () => {
    if (!checked) {
      setChecked(true);

      dispatch(chainsActions.addToSelectedChains(chainName));

      if (howManySelectedItems.length === 0) {
        dispatch(chainsActions.toggleAllUncheckedToFalse());
      }
    } else {
      setChecked(false);
      dispatch(chainsActions.removeFromSelectedChains(chainName));

      if (howManySelectedItems.length === 1) {
        dispatch(chainsActions.toggleAllUncheckedToTrue());
      }
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id={props.id}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={props.key}>{props.name}</label>
    </>
  );
};

export default ChainFilterItem;
