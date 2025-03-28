import { useSelector } from "react-redux";
import { RootState } from "./store";

export const Contador = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    return <h1>{count}</h1>;
};