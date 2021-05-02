import {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { MarketCoin } from "../../types/coins";
import { WatchListContextData } from "../../types/context";
import {
  addCoinToCoinOptions,
  isValidatedValue,
  handleAddNewCoinToWatchList,
} from "./WatchListContextHelpers";
import { getCoinNameAndSymbolArray } from "../../utils/helpers";

const watchListDefaultValues = {
  watchListFormOpen: false,
  onClickOpenForm: () => null,
  onClickCloseForm: () => null,
  watchList: [],
  watchListName: "",
  updateWatchListName: () => null,
  addNewCoinToWatchList: () => null,
  removeCoinFromWatchList: () => null,
  coinOptions: [],
  createCoinOptions: () => null,
};

export const WatchListContext = createContext<WatchListContextData>(
  watchListDefaultValues
);

export const useWatchList = () => {
  return useContext(WatchListContext);
};

interface Props {
  children: React.ReactNode;
}

export const WatchListProvider: React.FC<Props> = ({ children }) => {
  const [watchListFormOpen, setWatchListFormOpen] = useState<boolean>(false);
  const [watchList, setWatchList] = useState<MarketCoin[]>([]);
  const [watchListName, setWatchListName] = useState<string>("My Watchlist");
  const [coinOptions, setCoinOptions] = useState<string[]>([]);

  const onClickOpenForm = () => {
    setWatchListFormOpen(true);
  };
  const onClickCloseForm = () => {
    setWatchListFormOpen(false);
  };

  const updateWatchListName = (newName: string) => {
    setWatchListName(newName);
  };

  const addNewCoinToWatchList = (
    marketCoins: MarketCoin[],
    coinOptions: string[],
    inputValue: string,
    setInputValue: Dispatch<SetStateAction<string>>
  ) => {
    if (isValidatedValue(coinOptions, inputValue)) {
      handleAddNewCoinToWatchList(
        marketCoins,
        inputValue,
        setCoinOptions,
        setWatchList
      );
    } else {
      alert("This coin is not supported currently. Please try again.");
    }
    setInputValue("");
  };

  const removeCoinFromWatchList = (
    coinSymbol: string,
    marketCoins: MarketCoin[]
  ) => {
    setWatchList((prev) => prev.filter((coin) => coin.symbol !== coinSymbol));
    addCoinToCoinOptions(marketCoins, setCoinOptions, coinSymbol);
  };

  const createCoinOptions = (marketCoins: MarketCoin[]) => {
    const options = getCoinNameAndSymbolArray(marketCoins);
    setCoinOptions(options);
  };

  return (
    <WatchListContext.Provider
      value={{
        watchListFormOpen,
        onClickOpenForm,
        onClickCloseForm,
        watchListName,
        updateWatchListName,
        watchList,
        addNewCoinToWatchList,
        removeCoinFromWatchList,
        coinOptions,
        createCoinOptions,
      }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
