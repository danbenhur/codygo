import classes from "../css/LeftBar.module.css";
import { chains } from "./hotels";
import ChainFilterItem from "../components/ChainFilterItem";
import { useState } from "react";
import Button from "./UI/Button";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { chainsActions } from "../store/chains-slice";

const LeftBar = () => {
  const [selectedChains, setSelectedChains] = useState([]);
  const isAllUnchecked = useSelector((state) => state.chains.allUnchecked);

  const filterHandler = (nameOfChain) => {
    setSelectedChains([...selectedChains, nameOfChain]);
  };

  const dispatch = useDispatch();
  const purgeAll = () => {
    dispatch(chainsActions.purgeAll());
  };

  const chainsForFilter = chains.map((chain) => {
    const chainKey = Math.random();
    const chainName = chain.chain_name;
    if (chainName === "No chain" || chainName === "") {
      return null;
    } else {
      return (
        <>
          <li key={chainKey}>
            <ChainFilterItem
              id={chainKey}
              name={chainName}
              onClick={filterHandler}
            />
          </li>
        </>
      );
    }
  });

  return (
    <div className={classes.chains_filter}>
      <h3 className={classes.filter_title}>Filter By Chains</h3>
      {!isAllUnchecked && (
        <Button
          buttonClass={classes.purge_btn}
          buttonText="Clear All Filters"
          buttonAction={purgeAll}
        />
      )}
      <div>
        <ul>{chainsForFilter}</ul>
      </div>
    </div>
  );
};
export default LeftBar;
