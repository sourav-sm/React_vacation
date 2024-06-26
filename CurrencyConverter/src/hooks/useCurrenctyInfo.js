import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const[data,setData]=useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data

    //WHAT HAPPEN IF I NOT USE USEEFFECT HOOK
    // herefore, using useEffect ensures that the API call is made only when necessary (i.e., when the currency value changes), improving performance and preventing unnecessary API requests. It also ensures that data is updated properly after the API response is received.
}

export default useCurrencyInfo;