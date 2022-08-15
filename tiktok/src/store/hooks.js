import Context from "./Context";
import { useContext } from "react";

export function useStore() {
    const [state, dispatch] = useContext(Context)

    return [state, dispatch]
}
