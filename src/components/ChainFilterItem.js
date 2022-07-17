import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chainsActions } from "../store/chains-slice";

const ChainFilterItem = (props) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const isAllUnchecked = useSelector((state) => state.chains.allUnchecked);

  const howManySelectedItems = useSelector(
    (state) => state.chains.selectedChains
  );

  const chainName = props.name;

  const handleChange = () => {
    setChecked((prevState) => !prevState);
    if (!checked) {
      if (howManySelectedItems.length === 0) {
        dispatch(chainsActions.toggleAllUnchecked());
      }

      dispatch(chainsActions.addToSelectedChains(chainName));
    } else {
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
    <li key={props.id}>
      <label htmlFor={props.key}>
        <input
          type="checkbox"
          id={props.id}
          checked={checked}
          onChange={handleChange}
        />
        {props.name}
      </label>
    </li>
  );
};

export default ChainFilterItem;
