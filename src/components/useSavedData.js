import {useState } from "react";

function useSavedData(data) {
    const [savedData, setSavedData] = useState(data); 

    return [savedData, setSavedData];
}

export default useSavedData;