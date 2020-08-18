import { useContext } from "react";
import AppOptionContext from "../context/AppOptionsContext";

export default function useAds() {
  const appOptions = useContext(AppOptionContext);
  const {
    adsLeft,
    upQuestion,
    underQuestion,
    inResultModal,
    rightAds,
  } = appOptions;
  return {
    adsLeft,
    upQuestion,
    underQuestion,
    inResultModal,
    rightAds,
  };
}
