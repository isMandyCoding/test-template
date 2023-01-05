import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("Awaiting Response");

  // An example of how to reach the express server in the same docker-compose network
  useEffect(() => {
    const pingBackend = async () => {
      try {
        const basicHttpResponse = await axios.get("http://localhost:4545/ping");
        setGreeting(basicHttpResponse?.data?.greeting);
        console.log(basicHttpResponse);
      } catch (error) {
        console.error(error);
      }
    };
    pingBackend();
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {greeting}
        </a>
      </header>
    </div>
  );
}

export default App;
