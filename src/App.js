import Counter from "./component/counter";
import WeatherForm from "./component/WeatherForm";
import "./App.css";

function App() {
  return (
    <>
      <p className="header-text">REDUX - Home Assignment</p>
      <h1>Task 1: Develop a Counter App With Redux Toolkit</h1>
      <div className="task-1">
        <h5>Counter Application</h5>
        <Counter />
      </div>

      <h1>Task 2: Develop a Weather App With Async Data Fetching</h1>
      <WeatherForm />
    </>
  );
}

export default App;
