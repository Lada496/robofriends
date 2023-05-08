import { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "./ErrorBoundry";
import { setSearchField, requestRobots } from "../action";
import "./App.css";

const mapStateToState = (state) => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

function App({
  searchfield,
  onSearchChange,
  onRequestRobots,
  robots,
  isPending,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield)
  );

  return isPending ? (
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
// coonect is a HOC
export default connect(mapStateToState, mapDispatchToProps)(App);
