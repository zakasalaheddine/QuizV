import { useContext } from "react";
import AppOptionContext from "../context/AppOptionsContext";

export default function useAds() {
  const appOptions = useContext(AppOptionContext);
  if (appOptions) {
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
  return {
    adsLeft: null,
    upQuestion: null,
    underQuestion: null,
    inResultModal: null,
    rightAds: null,
  };
}
