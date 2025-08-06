import { useState } from "react";
function App(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>
                Triggered on every re-render
            </h1>
            <button onClick={() => setCount(count+1)}>Plus 1</button>
            <p>{count}</p>
        </div>
    )
}

export default App;