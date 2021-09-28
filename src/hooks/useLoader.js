import { useContext } from "react";
import SpinnerContext from "../contexts/SpinnerContext";

export default function useLoader() {
  return useContext(SpinnerContext);
}
