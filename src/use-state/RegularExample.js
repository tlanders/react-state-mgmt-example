import {useState} from "react";

export const RegularExample = () => {
    const [numClicks, setNumClicks] = useState(0);

    return (
        <>
            <h1>Regular Example</h1>
            <p>You have clicked the button {numClicks} times</p>
            <button onClick={() => setNumClicks(numClicks + 1)}>Click Here</button>
        </>
    )
}