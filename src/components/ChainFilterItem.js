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
      if (howManySelectedItems.length === 0) {
        dispatch(chainsActions.toggleAllUnchecked());
      }

      dispatch(chainsActions.addToSelectedChains(chainName));
    } else {
      setChecked(false);
      dispatch(chainsActions.removeFromSelectedChains(chainName));

      if (howManySelectedItems.length === 1) {
        dispatch(chainsActions.toggleAllUnchecked());
      }
    }
  };
  useEffect(() => {
    if (isAllUnchecked && checked) {
      setChecked(false);
    }
  }, [isAllUnchecked, checked]);

  return (
    <>
      <label htmlFor={props.key}>
        <input
          type="checkbox"
          id={props.id}
          checked={checked}
          onChange={handleChange}
        />
        {props.name}
      </label>
    </>
  );
};

export default ChainFilterItem;
