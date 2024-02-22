import { useState } from "react";

function HomeFunction(){
const [count, setCount] = useState(0)

    return (
    <div>
    <h1> Home </h1>
    <br></br>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Welcome to the first version of the EnControl Site!
        </p>
      </div>
      <p className="read-the-docs">
        This is barely even a v0.1
      </p>
      </div>
      )
}
export default HomeFunction;