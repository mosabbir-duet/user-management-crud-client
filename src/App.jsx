import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-6xl text-center text-violet-400">
        User Management System
      </h1>
    </>
  );
}

export default App;
