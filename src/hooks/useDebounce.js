import {useState, useEffect} from "react";

function useDebounce(value, delay) {
    const [deboundValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value),delay);

        return () => clearTimeout(handler);
    },[value]);

    return deboundValue;
}

export default useDebounce;