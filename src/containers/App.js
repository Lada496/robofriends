import { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");
  const [count, setCount] = useState(0);
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      })
      .catch((error) => {
        throw Error(error);
      });
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield)
  );
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <ErrorBoundry>
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    </ErrorBoundry>
  );
}
export default App;
