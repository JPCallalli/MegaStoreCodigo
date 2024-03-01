import { useState } from "react";

// Me va a permitir tener un contador e implementarlo en un customhook

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    return { counter, increment }
}

export default useCounter;